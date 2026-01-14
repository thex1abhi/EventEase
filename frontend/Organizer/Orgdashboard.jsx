import React from "react";
import { useNavigate } from "react-router-dom";

const Orgdashboard = () => { 
    
  const navigate=useNavigate();
  

  return <> 
  
    <div >

      <div className="md:text-2xl m-5  text-center " >Organizer Dashboard</div> 
      <div> 
         <button onClick={()=>navigate("/create-event")} className=" md:w-3/4 p-3 m-4   " > Create a New Event  </button>  
      </div>
    </div> </> 
};

export default Orgdashboard;
