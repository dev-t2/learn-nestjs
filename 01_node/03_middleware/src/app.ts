import express from 'express';

import { Cat } from './app.model';

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log('Global Middleware');

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/cats', (req, res) => {
  res.send({ cats: Cat });
});

app.get(
  '/cats/:id',
  (req, res, next) => {
    console.log('Router Middleware');

    next();
  },
  (req, res) => {
    const { id } = req.params;
    const cat = Cat.find(cat => cat.id === parseInt(id, 10));

    res.send(cat);
  }
);

app.use((req, res) => {
  console.log('Not Found Middleware');

  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
