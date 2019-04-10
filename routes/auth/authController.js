import Model from '../../database';

export const findOrCreateUser = profile => Model.User.findOrCreate({
  where: { googleId: profile.id },
  defaults: {
    googleId: profile.id,
    name: profile.displayName,
    email: profile.emails[0].value,
      img: profile._json.picture, // eslint-disable-line
  },
});

export const getUserAndList = id => Model.User.findOne({
  where: { id },
  include: [
    {
      model: Model.List,
      as: 'list',
      attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
    },
  ],
  attributes: { exclude: ['googleId', 'createdAt', 'updatedAt'] },
});
