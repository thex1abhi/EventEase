import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const Events = () => {

  const [events, setEvents] = useState([]);
  const { backendurl } = useAppContext();
 const navigate=useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`${backendurl}/user/events`);
        // adjust this based on your API response
        setEvents(data.events || data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, [backendurl]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
       
        <div className="mb-10 flex justify-center align-center">
          <h2 className="text-3xl font-bold   mb-2">Upcoming Events</h2>
          
        </div>

      
        <div>
          {events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <div 
                  key={event._id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                >
                 
                  <div className="h-45 overflow-hidden bg-gray-200">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300   "
                    />
                  </div>

                
                  <div className="p-5  ">
                   
                    <div className="flex justify-between items-center gap-3 mb-3">
                      <h3 className="text-base font-semibold  truncate">{event.name}</h3>
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md whitespace-nowrap">City:{event.city}</span>
                    </div>

                    
                    <div className="flex justify-between items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-md"> Type: {event.type}</span>
                      <span className="text-base font-bold text-green-600">Ticket Cost:{event.price}</span>
                    </div>

                    
                    <div >
                      <p className="text-sm text-gray-700 line-clamp-2">Address: {event.address}</p> 
                    </div> 
                    <div> <button onClick={()=>navigate(`/book-event/${event._id}`)} className="mt-2 md:text-xl p-2 bg-red-800 text-white w-full rounded-xl" > Book Event </button> </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-lg text-gray-600 font-medium">No events found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
