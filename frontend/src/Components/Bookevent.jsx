
import React from "react";
import { useAppContext } from "../../Context/AppContext"; 
import { data, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios  from "axios";

const Bookevent = () => {


  const { eventId } = useParams();
  
  const { backendurl } = useAppContext() 
  const [events, setevents] = useState([]);
  
  const [form, setform] = useState(
    {
      name: "",
      age: "",
      phone: ""
    });

  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleChange = async (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendurl}/user/${eventId}`, form);
      if (res.data.message.includes("already booked ")) {
        setMessage(`You have already booked this event . Seat Number :${res.data.seatNumber} `);
      } else {
        setMessage(`Event booked Successfully ! Seat No:${res.data.seatNumber} `);
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went Wrong");
    }
  } 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`${backendurl}/user/single-event/${eventId}`  );
       
        setevents(data.events || data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, [eventId]);
  
 
  return (<> 
 
 <div>
    <div>
                 
                 
            <div className="h-40    bg-gray-200">
                    <img
                      src={data.image}
                      alt={data.name}
                      className=" h-full  w-full object-fill  hover:scale-105 transition-transform duration-300   "
                    />
                  </div>

                
                  <div className="p-5  ">
                   
                    <div className="flex justify-between items-center gap-3 mb-3">
                      <h3 className="text-base font-semibold  truncate">{data.name}</h3>
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md whitespace-nowrap">City:{data.city}</span>
                    </div>

                    
                    <div className="flex justify-between items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-md"> Type: {data.type}</span>
                      <span className="text-base font-bold text-green-600">Ticket Cost:{data.price}</span>
                    </div>

                    
                    <div >
                      <p className="text-sm text-gray-700 line-clamp-2">Address: {data.address}</p> 
                    </div> 
                  </div>  
                </div>

 </div>

    <div>
      {message ? ( <h2> {message} </h2> ): ( 
        <form onSubmit={handleSubmit} > 
   <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
           <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
           <button type="submit"> Book Event </button>
           </form>
      )  
    }
    </div>
  </>)
};

export default Bookevent;

