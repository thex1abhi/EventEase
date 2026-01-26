import mongoose from "mongoose";

const organizerSchema= new  mongoose.Schema (
    {
 
    name: {
      type: String,
      required: true,
    
    },

    email: {
      type: String,
      required: true,
      unique: true,
     
    },
    password: {
      type: String,
      required: true,
      
    }
   

    }
) 
 const  organizer = mongoose.model("Organizer", organizerSchema);  
 export default organizer ;
