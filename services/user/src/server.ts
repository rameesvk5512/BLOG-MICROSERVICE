import express  from 'express'
import dotenv from 'dotenv'
import dbConnect from './utils/db.js'
import userRoutes from './routes/user.js'
const app=express()
dotenv.config()
const PORT=process.env.PORT

app.use("/api/vi",userRoutes)
dbConnect()
app.listen(process.env.PORT,()=>{
    console.log(`app is listneing ${PORT}`);
    
})