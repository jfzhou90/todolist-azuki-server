import express from 'express';
import path from 'path';

const app = express();

app.get('/api/proxy-test', (req, res) => {
  res.status(200).send('Proxy is Working.');
});

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

app.get('*', (req, res) => {
  res.send('hi, running on dev state?');
});

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
