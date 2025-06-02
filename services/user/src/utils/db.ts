import mongoose from 'mongoose'

const dbConnect=async()=>{
    try {
       await mongoose.connect("mongodb+srv://rameesvk551:cQuIvOXhtgSm7EFj@cluster0.bjoel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",      )
        console.log("mongodb connected");
        

        
    } catch (error) {
        
    }
   
}

export default dbConnect