import express from 'express';
import { getMe } from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// GET /api/users/me
router.get('/me', authenticate, getMe);

export default router;
