// routes/userRoutes.ts
import express from 'express';
import { userLogin } from '../controllers/user.js'; // ✅ use `.js` if using ES modules

const router = express.Router();

router.post('/login', userLogin);

export default router;
[]