import React from "react";

const events = [
  {
    id: 1,
    title: "Live Music Concert",
    date: "25 March 2026",
    location: "Mumbai",
    price: "₹999",
    image:"",
  },
  {
    id: 2,
    title: "Tech Conference 2026",
    date: "10 April 2026",
    location: "Bangalore",
    price: "₹1499",
    image:"",
  },
  {
    id: 3,
    title: "Wedding Expo",
    date: "5 May 2026",
    location: "Delhi",
    price: "₹799",
    image: ""
  },
];

const Events = () => {
  return (
    <div className="  md:px-30 mx-5 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Upcoming Events
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-45 object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {event.title}
              </h2>

              <p className="text-gray-600">
                📅 {event.date}
              </p>
              <p className="text-gray-600">
                 {event.location}
              </p>

              
<div className="flex gap-4" >
              <button className="mt-4  w-2/4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Event
              </button>  
              <button className="mt-4 w-2/4 bg-amber-700 text-white py-2 rounded-lg hover:bg-blue-700 transition"> 
                Book Now
              </button>  
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
