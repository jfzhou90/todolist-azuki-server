import express from 'express';
import path from 'path';
import middlewares from './middlewares';
import routes from './routes';
import db from './database';
import seed from './database/seed/seed-db';

import './services/passport';

const app = express();
const PORT = process.env.PORT || 5000;
middlewares(app); // Apply middlewares to express app

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('build'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

routes(app);

// Uncomment below to Seed Database First
db.sequelize
  .sync()
  // .sync({ force: true })
  .then(() => {
    // seed.insert();
  })
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`running server on port ${PORT}`);
    });
  });

// db.sequelize.sync().then(() => {
//   // eslint-disable-next-line no-console
//   app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
// });
