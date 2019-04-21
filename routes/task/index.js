import express from 'express';
import {
  getTasksByListId,
  toggleTaskComplete,
  addTask,
  deleteTask,
  reorderTasks,
  getTaskByTaskId,
  updateTaskTitle,
} from './taskController';

const router = express.Router();

router.get('/:id', (request, response) => {
  getTasksByListId(request.user.id, request.params.id).then((data) => {
    response.send(data.tasks);
  });
});

router.get('/single/:id', (request, response) => {
  try {
    getTaskByTaskId(request.user.id, request.params.id).then((data) => {
      response.send(data);
    });
  } catch (error) {
    response.send([]);
  }
});

router.put('/toggle', (request, response) => {
  const { taskId, isCompleted } = request.body;
  // eslint-disable-next-line max-len
  toggleTaskComplete(request.user.id, taskId, isCompleted).then(data => response.send(data));
});

router.post('/create', (request, response) => {
  const { listId, name } = request.body;
  addTask(request.user.id, listId, name).then(data => response.send(data));
});

router.delete('/', (request, response) => {
  deleteTask(request.user.id, request.body.id).then(() => response.send({ STATUS: 'OK' }));
});

router.post('/reorderTasks', (request, response) => {
  reorderTasks(request.user.id, request.body.tasks);
  response.status(200).send({ STATUS: 'OK' });
});

router.put('/updateTaskTitle', (request, response) => {
  const { id, name } = request.body;
  updateTaskTitle(request.user.id, id, name).then(data => response.send(data));
});

export default router;
