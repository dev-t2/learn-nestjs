import { Router } from 'express';

import { Cat } from './cat.model';

const router = Router();

router.post('/', (req, res) => {
  try {
    const id = Cat[Cat.length - 1].id + 1;
    const data = { id, ...req.body };

    Cat.push(data);

    res.send({ isSuccess: true, data });
  } catch (error) {
    res.status(400).send({ isSuccess: false, error: error.message });
  }
});

router.get('/', (req, res) => {
  try {
    const cats = Cat;

    res.send({ isSuccess: true, data: cats });
  } catch (error) {
    res.status(400).send({ isSuccess: false, error: error.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const cat = Cat.find(cat => cat.id === parseInt(id, 10));

    if (cat) {
      res.send({ isSuccess: true, data: cat });
    } else {
      res.status(404).send({ isSuccess: false, error: 'Cat Not Found' });
    }
  } catch (error) {
    res.status(400).send({ isSuccess: false, error: error.message });
  }
});

export default router;
