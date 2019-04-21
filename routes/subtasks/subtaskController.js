import Model from '../../database';

export const addSubtask = (UserId, TaskId, name) => Model.Subtask.count({
  where: {
    TaskId,
  },
}).then(count => Model.Subtask.create({
  UserId,
  TaskId,
  name,
  order: count,
}));

export const updateSubtask = (UserId, id, name) => Model.Subtask.findOne({
  where: {
    id,
    UserId,
  },
}).then(subtask => subtask.update({ name }));

export const deleteSubtask = (UserId, id) => Model.Subtask.destroy({
  where: {
    id,
    UserId,
  },
});

// eslint-disable-next-line max-len
export const reorderSubtask = (UserId, newOrder) => newOrder.forEach((subtask, index) => Model.Subtask.findOne({
  where: {
    id: subtask,
    UserId,
  },
}).then((oldTask) => {
  oldTask.update({ order: index });
}));

export const toggleSubtask = (UserId, id, isCompleted) => Model.Subtask.findOne({
  where: {
    id,
    UserId,
  },
}).then((oldTask) => {
  oldTask.update({ isCompleted });
});
