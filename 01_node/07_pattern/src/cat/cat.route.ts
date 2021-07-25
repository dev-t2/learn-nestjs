import { Router } from 'express';

import {
  createCat,
  deleteCat,
  readCat,
  readCats,
  updateCat,
} from './cat.service';

const router = Router();

router.post('/', createCat);
router.get('/', readCats);
router.get('/:id', readCat);
router.put('/:id', updateCat);
router.delete('/:id', deleteCat);

export default router;
