 import Events from "../models/createevent.js"

 const Homeevents=async(req,res)=>{
      
    try {
         const events=await  Events.find().sort({date:-1}).limit(3); 
         res.json({ success:true, message:"Events Fetched Successfull", events});
    } catch (error) { 
          res.json({ success:false, error:"Events Fetched failed"});
    }
 } 

 export default Homeevents  