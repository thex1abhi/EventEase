 

 const Allevents=async(req,res)=>{
      
    try {
         const events=await  Event.find();
         res.json({ success:true, message:"Events Fetched Successfull", events});
    } catch (error) { 
          res.json({ success:false, error:"Events Fetched failed"});
    }
 } 

 export default Allevents