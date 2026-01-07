import mongoose from  "mongoose" 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) 
        console.log("Connected to Database")
    } catch (error) {
        console.error("Error Connecting to Database" ,error.message)
    }
} 

export default connectDB