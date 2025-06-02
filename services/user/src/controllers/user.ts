import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../mode/user.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

// Custom Request with authenticated user
export interface AuthenticatedRequest extends Request {
  user: IUser | null;
}

// Login Controller
export const userLogin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isMatch = password === "yourActualPassword";
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const getMyProfile = async (req: AuthenticatedRequest, res: Response): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { _id, name, email } = req.user;

    return res.status(200).json({
      message: 'Profile retrieved successfully',
      user: { id: _id, name, email },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUserProfile = async (req:Request, res: Response): Promise<Response> => {
  try {
  
 

    const { _id} = req.params;
 const user = await User.findById(_id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({
      message: 'Profile retrieved successfully',
      user
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUserProfile = async (req:AuthenticatedRequest, res: Response): Promise<Response> => {
  try {
  
 
 if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { _id } = req.user;

    const {name,linkedin,facebook,bio,instagram} = req.body;
 const user = await User.findByIdAndUpdate(_id,{
  name,bio,linkedin,facebook,instagram
 },{new:true})

   
    return res.status(200).json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};