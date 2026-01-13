import React from "react";
import { useNavigate } from "react-router-dom";
 
const   Eventbtn = () => { 
 
     const navigate=useNavigate()
    
      const btn=()=>{
        navigate("/all-events")
      }

  return  <div className="flex items-center justify-center mb-6  shadow-amber-100 " >
   <button  onClick={btn}  className=" hover:scale-x-90 bg-pink-300  p-3 md:text-xl rounded-2xl  md:w-1/4  " >View All Events</button>
   </div> 
};

export default Eventbtn;
  