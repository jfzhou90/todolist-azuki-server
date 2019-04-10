/* eslint-disable */
import models from '../index.js';
import USERS from './users.json';
import LISTS from './lists.json';
import TODOS from './todos.json';

export default {
  insert: () => {
    models.User.bulkCreate(USERS)
      .then(() => {
        models.List.bulkCreate(LISTS).then(() => {
          models.Todo.bulkCreate(TODOS).then(console.log('success'));
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
};
