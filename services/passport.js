import passport from 'passport';
import GoogleOAuth from 'passport-google-oauth';
import keys from '../config/keys';
import Model from '../database';

const GoogleStrategy = GoogleOAuth.OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Model.User.findOne({ where: { id } }).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.redirectDomain,
    },
    (accessToken, refreshToken, profile, done) => {
      Model.User.findOrCreate({
        where: { googleId: profile.id },
        defaults: {
          googleId: profile.id,
          name: profile.displayName,
          // eslint-disable-next-line
          img: profile._json.picture,
          email: profile.emails[0].value,
        },
      }).then((user) => {
        done(null, user[0]);
      });
    },
  ),
);

// User.findOne({ googleId: profile.id }).then(existingUser => {
//   if (existingUser) {
//     // we already have a record with the given profile ID
//     done(null, existingUser)
//   } else {
//     // we don't have a user record with this ID, make a new record!
//     new User({ googleId: profile.id, })
//       .save()
//       .then(user => done(null, user))
//   }
// })
