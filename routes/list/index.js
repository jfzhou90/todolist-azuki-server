import express from 'express';
import {
  deleteListById,
  createNewList,
  updateListOrder,
  updateListFields,
  clearCompletedTasks,
} from './listController';

const router = express.Router();

// Routes
router.delete('/:id', (request, response) => {
  deleteListById(request.params.id, request.user.id).then((data) => {
    if (data) {
      response.send(data.lists);
    } else {
      response.redirect(404, '/404');
    }
  });
});

router.post('/createList', (request, response) => {
  const data = { UserId: request.user.id, name: request.body.name };
  createNewList(data).then((list) => {
    response.send(list);
  });
});

router.post('/reorderList', (request, response) => {
  updateListOrder(request.user.id, request.body).then(() => response.send({ STATUS: 'OK' }));
});

router.put('/updateListFields', (request, response) => {
  updateListFields(request.user.id, request.body).then(data => response.send(data.lists));
});

router.put('/clearCompletedTasks', (request, response) => {
  clearCompletedTasks(request.user.id, request.body).then((data) => {
    response.send(data.tasks);
  });
});

export default router;
