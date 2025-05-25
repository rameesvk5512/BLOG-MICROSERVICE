import { Request, Response } from "express";
import User from "../mode/user.js";
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';
export const userLogin=async(req:Request,res:Response)=>{
    try {
          const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = "match"
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    // Send token and user data
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });
    } catch (error:any) {
     res.status(500).json({ message: error.message });
    }

}