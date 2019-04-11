export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
    },
    googleId: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    models.User.hasMany(models.List, { as: 'list', onDelete: 'CASCADE' });
    models.User.hasMany(models.Todo, { as: 'todo', onDelete: 'CASCADE' });
    models.User.hasMany(models.Task, { as: 'task', onDelete: 'CASCADE' });
  };

  return User;
};
