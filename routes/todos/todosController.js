import Model from '../../database';

export const getTodosByListId = (UserId, id) => Model.List.findOne({
  where: {
    id,
    UserId,
  },
  include: [
    {
      model: Model.Todo,
      as: 'todos',
      attributes: { exclude: ['ListId', 'createdAt', 'updatedAt'] },
    },
  ],
});

export const toggleTodoComplete = (UserId, ListId, id, isCompleted) => Model.Todo.findOne({
  where: {
    id,
    ListId,
    UserId,
  },
  include: [
    {
      model: Model.Task,
      as: 'tasks',
      attributes: { exclude: ['UserId', 'TodoId', 'createdAt', 'updatedAt'] },
    },
  ],
}).then(data => data.update({ isCompleted }));

export const addTodo = (UserId, ListId, name) => Model.Todo.count({
  where: {
    ListId,
  },
}).then(count => Model.Todo.create({
  UserId,
  ListId,
  name,
  order: count,
}));

export const deleteTodo = (UserId, id) => Model.Todo.findOne({
  where: {
    UserId,
    id,
  },
}).then(todo => todo.destroy());
