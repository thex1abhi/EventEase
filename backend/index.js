import express from "express"
import cors from 'cors'
import dotenv from "dotenv";

import connectDB from "./mongodb.js";

dotenv.config();   

const app=express();
app.use(cors());
app.use(express.json())
 
 

const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
   res.send("Backend Working")
})
 

 
app.listen(port,()=>{ 
    connectDB();
    console.log(`server running on port ${port}` )
})  
