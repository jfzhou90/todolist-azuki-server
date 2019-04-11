import express from 'express';
import {
  getTodosByListId, toggleTodoComplete, addTodo, deleteTodo,
} from './todosController';

const router = express.Router();

router.get('/:id', (request, response) => {
  getTodosByListId(request.user.id, request.params.id).then((data) => {
    response.send(data.todos);
  });
});

router.put('/toggle', (request, response) => {
  const { listId, todoId, isCompleted } = request.body;
  // eslint-disable-next-line max-len
  toggleTodoComplete(request.user.id, listId, todoId, isCompleted).then(data => response.send(data));
});

router.post('/create', (request, response) => {
  const { listId, name } = request.body;
  addTodo(request.user.id, listId, name).then(data => response.send(data));
});

router.delete('/', (request, response) => {
  console.log(request.body);
  deleteTodo(request.user.id, request.body.id).then(() => response.send({ STATUS: 'OK' }));
});

export default router;
