 
 import React, { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext";
 import axios from "axios" 

 const Events = () => { 

  const [events, setEvents] = useState([]);
   const {backendurl}=useAppContext(); 
  
   try {
       useEffect(() => {
    const {data}=  axios.get(`${backendurl}/organizer/events`)
     setEvents(data); 
     
  }, []);

   } catch (error) {
     console.log(error)
   }
    


   return <>
   </>
 };
 
 export default Events;
 
