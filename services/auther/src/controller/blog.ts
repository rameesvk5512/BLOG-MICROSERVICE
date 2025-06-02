import { Request, Response } from "express";
import { Blog } from "../models/Blog.js";

export interface IUser extends Document {
    _id:string
  name: string;
  email: string;
  image: string;
  instagram: string;
  bio: string;
  facebook: string;
  linkedIn: string;
  pasword:string
}

// Custom Request with authenticated user
export interface AuthenticatedRequest extends Request {
  user: IUser | null;
}

export const createBlog=async(req:AuthenticatedRequest,res:Response)=>{
   
try {
  const {title,description,blogContent,category}=req.body

await Blog.create({title,description,blogContent,category})

res.status(200).json({message:"new blog created"})
} catch (error) {
  
   console.error('Update error:', error);
    return res.status(500).json({ message: 'Internal server error' });

}
}


export const updateBlog = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, blogContent, category } = req.body;

    const [updatedRows] = await Blog.update(
      { title, description, blogContent, category },
      { where: { id } }
    );

    return res.status(200).json({ message: 'Blog updated successfully' });
  } catch (error) {
    console.error('Update error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteBlog=async(req:AuthenticatedRequest,res:Response)=>{
    const{id}=req.params
try {
  await Blog.destroy({
  where:{id}
})
return res.status(200).json({ message: 'Blog deleted successfully' });

} catch (error) {
  console.error('Update error:', error);
    return res.status(500).json({ message: 'Internal server error' });
}

}