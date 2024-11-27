import { Router } from 'express';
import newsController from '../controllers/newsController.js';

const router = Router();

router.get('/news', newsController.getAll);
router.post('/news', newsController.create);

export default router;
