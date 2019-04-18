import AuthRoutes from './auth';
import ListRoutes from './list';
import TaskRoutes from './task';
import requireLogin from '../middlewares/requireLogin';

export default (app) => {
  app.use('/auth/', AuthRoutes);
  app.use('/api/list', requireLogin, ListRoutes);
  app.use('/api/tasks', TaskRoutes);
};
