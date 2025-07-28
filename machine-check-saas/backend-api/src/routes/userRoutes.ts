import express from 'express';
import { getMe } from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router = express.Router();
router.get('/me', authenticate, getMe);
export default router;
