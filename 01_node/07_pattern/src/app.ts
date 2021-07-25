import express from 'express';

import catRouter from './cat/cat.route';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/cat', catRouter);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
