
import express from 'express';
import { getAllBlogs, getSingleBlog } from '../controller/blog.js';


const router = express.Router();

router.get('/get-all-blogs',getAllBlogs);
router.get('/get-blog/:id',getSingleBlog);


export default router;
[]