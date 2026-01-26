import React from "react";
import { useNavigate } from "react-router-dom";
 import { FaArrowCircleRight } from "react-icons/fa";
const   Eventbtn = () => { 
 
     const navigate=useNavigate()
    
      const btn=()=>{
        navigate("/all-events")
      }

  return  <div className="flex  m-12 items-center justify-center mb-6  shadow-amber-100 " >
   <button  onClick={btn}  className=" hover:scale-y-105 cursor-pointer bg-slate-800 text-white  p-3 md:text-xl rounded-2xl flex justify-center  items-center gap-3  md:w-1/4  " >View All Events  <span ><FaArrowCircleRight /></span>  </button>
   </div> 
};

export default Eventbtn;
  