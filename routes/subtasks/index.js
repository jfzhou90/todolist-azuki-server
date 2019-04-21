import express from 'express';
import { addSubtask, updateSubtask, deleteSubtask } from './subtaskController';

const router = express.Router();

router.post('/create', (request, response) => {
  const { taskId, name } = request.body;
  addSubtask(request.user.id, taskId, name).then(data => response.send(data));
});

router.put('/update', (request, response) => {
  const { id, name } = request.body;
  updateSubtask(request.user.id, id, name).then(data => response.send(data));
});

router.delete('/', (request, response) => {
  const { id, name } = request.body;
  deleteSubtask(request.user.id, id, name).then(() => response.send({ STATUS: 'OK' }));
});

export default router;
