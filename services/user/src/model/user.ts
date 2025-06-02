import { Schema } from "mongoose";
import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  instagram: string;
  bio: string;
  facebook: string;
  linkedIn: string;
  pasword:string
}

const schema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pasword: {
    type: String,
    required: true,
  },
  bio: String,
  instagram: String,
  facebook: String,
  linkedIn: String,
});

const User =mongoose.model<IUser>("User",schema)


export default User