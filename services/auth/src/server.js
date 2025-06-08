import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js'
import connectDB from './config/db.js';

dotenv.config()
const app = express();
app.use(cookieParser())
app.use(express.json());
connectDB()
const PORT = process.env.PORT || 3000;
app.use("/api/v1/auth",authRoutes)



  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
