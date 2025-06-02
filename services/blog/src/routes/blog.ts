
import express from 'express';
import { getAllBlogs, getSingleBlog } from '../controller/blog';


const router = express.Router();

router.get('/get-all-blogs',getAllBlogs);
router.get('/get-blog/:id',getSingleBlog);


export default router;
[]