import Model from '../../database';

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
      as: 'lists',
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
        as: 'lists',
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
      as: 'lists',
      attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
    },
  ],
})
  .then((data) => {
    lists.forEach((incomingList, index) => {
      data.list.forEach((outgoingList) => {
        if (incomingList === outgoingList.id && index !== outgoingList.order) {
          outgoingList.update({
            order: index,
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
        as: 'lists',
        attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
      },
    ],
  }));

export const clearCompletedTasks = (UserId, { ListId }) => Model.Task.destroy({
  where: {
    UserId,
    ListId,
    isCompleted: true,
  },
}).then(() => Model.List.findOne({
  where: {
    id: ListId,
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
          attributes: { exclude: ['UserId', 'TaskId', 'createdAt', 'updatedAt'] },
        },
      ],
    },
  ],
}));
