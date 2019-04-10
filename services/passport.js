import passport from 'passport';
import GoogleOAuth from 'passport-google-oauth';
import keys from '../config/keys';
import { getUserAndList, findOrCreateUser } from '../routes/auth/authController';

const GoogleStrategy = GoogleOAuth.OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  getUserAndList(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.redirectDomain,
    },
    (accessToken, refreshToken, profile, done) => {
      findOrCreateUser(profile).then((user) => {
        done(null, user[0]);
      });
    },
  ),
);
