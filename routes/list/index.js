import express from 'express';
import {
  getTodosByListId,
  deleteListById,
  createNewList,
  updateListOrder,
  updateListFields,
} from './listController';

const router = express.Router();

// Routes
router.get('/:id', (request, response) => {
  getTodosByListId(request.params.id).then((data) => {
    response.send(data.todos);
  });
});

router.delete('/:id', (request, response) => {
  deleteListById(request.params.id, request.user.id).then((data) => {
    if (data) {
      response.send(data.list);
    } else {
      response.redirect(404, '/404');
    }
  });
});

router.post('/createList', (request, response) => {
  const data = { UserId: request.user.id, name: request.body.name };
  createNewList(data).then(list => response.send(list));
});

router.post('/reorderList', (request, response) => {
  updateListOrder(request.user.id, request.body).then(data => response.send(data.list));
});

router.put('/updateListFields', (request, response) => {
  updateListFields(request.user.id, request.body).then(data => response.send(data.list));
});

export default router;
