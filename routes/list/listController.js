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

export const deleteListById = (id, UserId) => Model.List.destroy({
  where: {
    id,
  },
}).then(() => Model.User.findOne({
  where: {
    id: UserId,
  },
  include: [
    {
      model: Model.List,
      as: 'list',
      attributes: { exclude: ['ListId', 'createdAt', 'updatedAt'] },
    },
  ],
}));

// eslint-disable-next-line max-len
export const createNewList = data => Model.List.count({ where: { UserId: data.UserId } }).then((count) => {
  const newData = Object.assign({}, data, { order: count + 1 });
  return Model.List.create(newData);
});

export const updateListFields = (id, listData) => Model.List.findOne({
  where: {
    id: listData.id,
  },
})
  .then(list => list.update({
    name: listData.name,
  }))
  .then(() => Model.User.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Model.List,
        as: 'list',
        attributes: { exclude: ['ListId', 'createdAt', 'updatedAt'] },
      },
    ],
  }));

export const updateListOrder = (id, lists) => Model.User.findOne({
  where: {
    id,
  },
  include: [
    {
      model: Model.List,
      as: 'list',
      attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
    },
  ],
})
  .then((data) => {
    lists.forEach((incomingList) => {
      data.list.forEach((outgoingList) => {
        if (incomingList.id === outgoingList.id && incomingList.order !== outgoingList.order) {
          outgoingList.update({
            order: incomingList.order,
          });
        }
      });
    });
  })
  .then(() => Model.User.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Model.List,
        as: 'list',
        attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
      },
    ],
  }));
