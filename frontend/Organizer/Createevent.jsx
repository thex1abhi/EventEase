import React, { useState } from "react";

const Createevent = () => { 
    const [eventname, setEventname] = useState("");
    const [location, setlocation] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [typeofEvent, setTypeofEvent] = useState("");
      
    const hanleEventCreation =async(e)=>{
        e.preventDefault();
            console.log("Creating Eveent");
            
    }

  return <> 
  <div className=" m-10  flex items-center justify-center " > 
    <form type="submit" className="space-y-3 w-2/4 "> 
      <input
        type="text"
        placeholder="Enter Event Name"
        name={eventname}
        // onChange={e.target.value}
        className="w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />

      <input
        type="text"
        placeholder="Enter Event Location"
        name={Location}
        // onChange={e.target.value}
        className="w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />

      <input
        type="date"
     
        name={date}
        // onChange={e.target.value} 
           placeholder="Enter Event Date"
        className="w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />

      <input
        type="time"
        placeholder="Enter Event Time"
        name={time}
        // onChange={e.target.value}
        className="w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />  

      <input
        type="text"
        placeholder="Enter Event Type"
        name={typeofEvent}
        // onChange={e.target.value}
        className="w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      /> 

<button onSubmit={hanleEventCreation } > Create Event </button>
    </form>
  </div>
  </>
};

export default Createevent;
