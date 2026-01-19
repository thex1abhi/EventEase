import React from "react";
import { useNavigate } from "react-router-dom";
import Events from "../src/Components/Events";
import { CiSquarePlus } from "react-icons/ci";
const Orgdashboard = () => { 
    
  const navigate=useNavigate();
  

  return <> 
  
    <div >

      <div className="md:text-2xl m-5   text-center " >Organizer Dashboard</div> 
      <div className="flex  justify-center items-center   " > 
         <button onClick={()=>navigate("/create-event")} className="flex items-center justify-center gap-2 w-lg bg-blue-700 text-white px-8 py-4 m-4 rounded-3xl text-lg font-semibold hover:bg-blue-900" >  
           Create a New Event  
           <CiSquarePlus size={30} />
         </button>  
         
      </div> 
      < Events />
    </div> </> 
};

export default Orgdashboard;
