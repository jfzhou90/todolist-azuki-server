import express from 'express';
import passport from 'passport';
import requireLogin from '../../middlewares/requireLogin';

const router = express.Router();

// Routes
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failure: '/404/',
  }),
);

router.get('/logout', requireLogin, (request, response) => {
  request.logout();
  request.session = null;
  response.redirect('/');
});

router.get('/currentUserAndList', requireLogin, (req, res) => {
  res.send(req.user);
});

export default router;
