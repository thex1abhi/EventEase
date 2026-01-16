import React, { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import axios from "axios";

const Events = () => {

  const [events, setEvents] = useState([]);
  const { backendurl } = useAppContext();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(
          `${backendurl}/organizer/events`
        );

        // adjust this based on your API response
        setEvents(data.events || data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, [backendurl]);

  return (
    <>
      <div>
        <h2>Latest Events</h2>

        <div>
          {events.length > 0 ? (
            events.map(event => (
              <div key={event._id}>
                <img
                  src={event.image}
                  alt={event.name}
                  width="200"
                />
                <div> 
                  <h3>{event.name}</h3>
                <p>{event.city}</p>  
                <div> 
                  
                  <h2>{event.price} </h2> 
                  <h2>{event.type} </h2> 
                  <h2>{event.address} </h2> 
                </div>
                </div>
              </div>
            ))
          ) : (
            <p>No events found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
