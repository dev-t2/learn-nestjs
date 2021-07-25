import express from 'express';

import { Cat } from './app.model';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
