export default (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  List.associate = (models) => {
    models.List.hasMany(models.Todo, { as: 'todos', onDelete: 'cascade' });
  };

  return List;
};
