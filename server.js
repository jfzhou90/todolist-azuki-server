import express from 'express';
import path from 'path';
import http from 'http';
import socketIO from 'socket.io';
import middlewares from './middlewares';
import routes from './routes';
import db from './database';
// import seed from './database/seed/seed-db';

import './services/passport';
import configureSocket from './services/socket';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 5000;

middlewares(app, io); // Apply middlewares to express app
configureSocket(io);

routes(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('build'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// // Uncomment below to Seed Database First
// db.sequelize
//   .sync()
//   // .sync({ force: true })
//   .then(() => {
//     // seed.insert();
//   })
//   .then(() => {
//     server.listen(PORT, () => {
//       // eslint-disable-next-line no-console
//       console.log(`Server running on port ${PORT}`);
//     });
//   });

db.sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  server.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
});
