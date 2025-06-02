
import express from 'express';
import { createBlog } from '../controller/blog.js';

const router = express.Router();

router.post('/create-blog',createBlog);


export default router;
[]