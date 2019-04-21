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
