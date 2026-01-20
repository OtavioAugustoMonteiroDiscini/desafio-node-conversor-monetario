import { Router } from 'express';
import { ConvertController } from '../controllers/ConvertController';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/convert', authMiddleware, ConvertController.handle);

export default router;
