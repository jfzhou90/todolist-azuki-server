import AuthRoutes from './auth';
import ListRoutes from './list';
// import requireLogin from '../middlewares/requireLogin';

export default (app) => {
  app.use('/auth/', AuthRoutes);
  app.use('/api/list', ListRoutes);
  app.get('*', (request, response) => {
    response.status(404).send({ ERROR: 'Not Found' });
  });
};
