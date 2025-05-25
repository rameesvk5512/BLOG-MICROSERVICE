import mongoose from 'mongoose'

const dbConnect=async()=>{
    try {
         mongoose.connect(process.env.DB_URL as string)
        console.log("mongodb connected");
        

        
    } catch (error) {
        
    }
   
}

export default dbConnect