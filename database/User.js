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
    models.User.hasMany(models.List, { as: 'lists', onDelete: 'CASCADE' });
    models.User.hasMany(models.Task, { as: 'tasks', onDelete: 'CASCADE' });
    models.User.hasMany(models.Subtask, { as: 'subtasks', onDelete: 'CASCADE' });
  };

  return User;
};
