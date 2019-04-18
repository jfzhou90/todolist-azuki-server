import Model from '../../database';

export const getTasksByListId = (UserId, id) => Model.List.findOne({
  where: {
    id,
    UserId,
  },
  include: [
    {
      model: Model.Task,
      as: 'tasks',
      attributes: { exclude: ['UserId', 'ListId', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Model.Subtask,
          as: 'subtasks',
          attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
        },
      ],
    },
  ],
});

export const toggleTaskComplete = (UserId, id, isCompleted) => Model.Task.findOne({
  where: {
    id,
    UserId,
  },
  attributes: { exclude: ['updatedAt', 'createdAt', 'ListId'] },
  include: [
    {
      model: Model.Subtask,
      as: 'subtasks',
      attributes: { exclude: ['UserId', 'TodoId', 'createdAt', 'updatedAt'] },
    },
  ],
}).then(data => data.update({ isCompleted }));

export const addTask = (UserId, ListId, name) => Model.Task.count({
  where: {
    ListId,
  },
}).then(count => Model.Task.create({
  UserId,
  ListId,
  name,
  order: count,
}));

export const deleteTask = (UserId, id) => Model.Task.findOne({
  where: {
    UserId,
    id,
  },
}).then(task => task.destroy());

// eslint-disable-next-line max-len
export const reorderTasks = (UserId, TaskArray) => TaskArray.forEach((id, index) => Model.Task.update(
  { order: index },
  {
    where: {
      id,
      UserId,
    },
  },
));
