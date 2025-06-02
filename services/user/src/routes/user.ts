

import express from 'express';
import {  getMyProfile, getUserProfile, updateUserProfile, userLogin } from '../controllers/user.js';

const router = express.Router();

router.post('/login',userLogin);
router.get('/me',getMyProfile);
router.get('/user/:id',getUserProfile);
router.get('/update-profile/',updateUserProfile);


export default router;
[]