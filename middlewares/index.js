import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import passport from 'passport';
import keys from '../config/keys';

export default (app, io) => {
  app.use(cors());
  app.use(
    cookieSession({
      maxAge: 168 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    }),
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next) => {
    req.io = io;
    next();
  });
};
