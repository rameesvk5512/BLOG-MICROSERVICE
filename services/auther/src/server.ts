import express  from 'express'
import dotenv from 'dotenv'
import blogRoutes from './routes/blog.js'
const app=express()
dotenv.config()
const PORT=process.env.PORT || 4444

app.use('/api/v1',blogRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`app is listneing ${PORT}`);
    
})