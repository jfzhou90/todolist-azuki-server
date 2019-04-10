import express from 'express';
import { getTodosByListId, deleteListById, createNewList } from './listController';
import { getUserAndList as getListByUserId } from '../auth/authController';

const router = express.Router();

// Routes
router.get('/:id', (request, response) => {
  getTodosByListId(request.params.id).then((data) => {
    response.send(data.todos);
  });
});

router.post('/fetchListByUserId', (request, response) => {
  getListByUserId(request.body.userId).then((data) => {
    response.send(data.list);
  });
});

router.delete('/:id', (request, response) => {
  deleteListById(request.params.id).then((status) => {
    if (status) {
      response.send({ STATUS: 'List successfully Deleted' });
    } else {
      response.status(400).send({ ERROR: 'List not found' });
    }
  });
});

router.post('/createList', (request, response) => {
  createNewList(request.body).then(data => response.send(data));
});

export default router;
