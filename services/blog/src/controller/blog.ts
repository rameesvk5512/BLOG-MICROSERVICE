
import axios from "axios";
import { Request, Response } from "express";
import { sequelize } from "../utils/db";
import { QueryTypes } from "sequelize";

 interface IBlog{
title:string,
description:string,
auther:string,
blogContent:string,
}

export const getAllBlogs=async(req:Request,res:Response)=>{

try {
    const blogs = await sequelize.query('SELECT * FROM blogs', {
  type: QueryTypes.SELECT,
});

    return res.status(200).json({
      blogs,
     
    });
} catch (error) {
        console.error('Error fetching blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
    
}

}
export const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    
    const [blog] = await sequelize.query<IBlog>(
      'SELECT * FROM blogs WHERE id = :id',
      {
        replacements: { id },
        type: QueryTypes.SELECT,
      }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

  
    const userRes = await axios.get(`${process.env.USER_SERVICE}/api/v1/user/${blog.auther}`);
console.log(userRes);

    return res.status(200).json({
      blog,
      author: userRes.data,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};