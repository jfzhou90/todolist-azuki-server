import AuthRoutes from './auth';

export default (app) => {
  app.use('/test', (req, res) => {
    res.send('HI');
  });
  app.use('/auth/', AuthRoutes);
  app.get('*', (request, response) => {
    response.status(404).send({ ERROR: 'Not Found' });
  });
};
