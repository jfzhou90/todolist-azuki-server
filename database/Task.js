export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
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
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Task.associate = (models) => {
    models.Task.hasMany(models.Subtask, { as: 'subtasks', onDelete: 'CASCADE' });
  };

  return Task;
};
