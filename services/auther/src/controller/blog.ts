import { Request, Response } from "express";

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

export const createBlog=(req:AuthenticatedRequest,res:Response)=>{
const {title,description,blogContent,category}=req.body

//save to neo db using equalie
//auther come from req.uer._id
}

export const updateBlog=(req:AuthenticatedRequest,res:Response)=>{
    const{id}=req.params
const {title,description,blogContent,category}=req.body

//save to neo db using equalie
//auther come from req.uer._id
}
export const deleteBlog=(req:AuthenticatedRequest,res:Response)=>{
    const{id}=req.params

//save to neo db using equalie
//auther come from req.uer._id
}