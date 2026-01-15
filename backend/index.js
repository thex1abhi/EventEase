
import dotenv from "dotenv";
dotenv.config(); 

import express from "express"
import cors from 'cors'
  
import connectDB from "./mongodb.js";
import organizerroutes from "./routes/organizer.routes.js";
import userroutes from "./routes/user.routes.js";



const app=express();
app.use(cors());
app.use(express.json())
 
 

const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
   res.send("Backend Working")
})
 
app.use('/api/v1/organizer',organizerroutes)
app.use('/api/v1/user',userroutes)
 
app.listen(port,()=>{ 
    connectDB();
    console.log(`server running on port ${port}` )
})  
 
