import Model from '../../database';

export const getTodosByListId = id => Model.List.findOne({
  where: {
    id,
  },
  include: [
    {
      model: Model.Todo,
      as: 'todos',
      attributes: { exclude: ['ListId', 'createdAt', 'updatedAt'] },
    },
  ],
});

export const deleteListById = id => Model.List.destroy({
  where: {
    id,
  },
});

// eslint-disable-next-line max-len
export const createNewList = data => Model.List.count({ where: { UserId: data.UserId } }).then((count) => {
  const newData = Object.assign({}, data, { order: count + 1 });
  return Model.List.create(newData);
});
