import AuthRoutes from './auth';
import ListRoutes from './list';
import TaskRoutes from './task';
import SubtaskRoutes from './subtasks';
import requireLogin from '../middlewares/requireLogin';

export default (app) => {
  app.use('/auth/', AuthRoutes);
  app.use('/api/list', requireLogin, ListRoutes);
  app.use('/api/tasks', requireLogin, TaskRoutes);
  app.use('/api/subtasks', requireLogin, SubtaskRoutes);
};
