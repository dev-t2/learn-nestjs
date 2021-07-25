import { Request, Response } from 'express';

import { Cat } from './cat.model';

export const createCat = (req: Request, res: Response) => {
  try {
    const id = Cat[Cat.length - 1].id + 1;
    const data = { id, ...req.body };

    Cat.push(data);

    res.send({ isSuccess: true, data });
  } catch (error) {
    res.status(400).send({ isSuccess: false, error: error.message });
  }
};

export const readCats = (req: Request, res: Response) => {
  try {
    const cats = Cat;

    res.send({ isSuccess: true, data: cats });
  } catch (error) {
    res.status(400).send({ isSuccess: false, error: error.message });
  }
};

export const readCat = (req: Request, res: Response) => {
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
};

export const updateCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const index = Cat.findIndex(cat => cat.id === parseInt(id, 10));

    if (index !== -1) {
      Cat[index] = data;

      res.send({ isSuccess: true });
    } else {
      res.status(404).send({ isSuccess: false, error: 'Cat Not Found' });
    }
  } catch (error) {
    res.status(400).send({ isSuccess: false, error: error.message });
  }
};

export const deleteCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const index = Cat.findIndex(cat => cat.id === parseInt(id, 10));

    if (index !== -1) {
      Cat.splice(index, 1);

      res.send({ isSuccess: true });
    } else {
      res.status(404).send({ isSuccess: false, error: 'Cat Not Found' });
    }
  } catch (error) {
    res.status(400).send({ isSuccess: false, error: error.message });
  }
};
