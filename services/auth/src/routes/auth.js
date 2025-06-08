
import express from 'express';
import { getMe, login, logout, register } from '../controller/auth.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login', login);
router.get('/me', verifyToken, getMe);
router.get('/logout', logout);
export default router;
[]