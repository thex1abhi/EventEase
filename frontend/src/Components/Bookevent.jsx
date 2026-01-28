import { useAppContext } from "../../Context/AppContext"; 
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios  from "axios";

const Bookevent = () => {


  const { id } = useParams();
  const eventId = id;
  
  const { backendurl } = useAppContext() 
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingSeatNumber, setBookingSeatNumber] = useState(null);
  
  const [form, setform] = useState(
    {
      name: "",
      age: "",
      phone: ""
    });

  const [message, setMessage] = useState("");
 
  const handleChange = async (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isBooked) {
      return;
    }
    
    try {
      const token = localStorage.getItem("user_token");
      const res = await axios.post(`${backendurl}/user/book/${eventId}`, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (res.status === 201) {
        setIsBooked(true);
        setBookingSeatNumber(res.data.booking.seatNumber);
        setMessage(res.data.message);
     
        localStorage.setItem(`booking_${eventId}`, form.phone);
      }
    } catch (error) {
      console.log(error);
      const errorData = error.response?.data;
      
      if (errorData?.alreadyBooked) {
        setIsBooked(true);
        setBookingSeatNumber(errorData.seatNumber);
      }
      
      setMessage(errorData?.message || "Something went Wrong");
    }
  } 

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`${backendurl}/user/single-event/${eventId}`);
        if (data && data.event) {
          setEvent(data.event);
          
         
          const token = localStorage.getItem("user_token");
          if (token) {
            try {
              const existingBooking = await Bookings.findOne({ userId: token, eventId });
              
            } catch (err) {
              console.log("No existing booking");
            }
          }
          
          setLoading(false);
        } else {
          setError("Event not found");
          setEvent(null);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to fetch event");
      } 
    };

     fetchEvent();
  }, [eventId, backendurl]);
  
 
  return (
    <div className="min-h-screen bg-linear from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <p className="text-gray-700 mb-3">{error}</p>
           
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
            <div className="flex flex-col">
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-70 sm:h-50 object-cover"
                />
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  {event.name}
                </h2>
                <div className="mb-4">
                  
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-block text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                      Type: {event.type}
                    </span>
                    <span className="inline-block text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      City: {event.city}
                    </span>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-gray-600 mb-2 text-sm font-semibold">Address</p>
                  <p className="text-gray-700">{event.address}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 text-sm">Price:</span>
                  <span className="text-3xl font-bold text-green-600">₹{event.price}</span>
                  <span className="text-gray-500 text-sm">per ticket </span>
                  
                </div> 
                <div className="text-red-500 font-light m-1 " > Note: Please carry cash </div> 
              </div>
            </div>

           
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 sticky top-4 sm:top-8">
                {isBooked ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-blue-700 font-semibold text-lg"> You have  booked this event!</p>
                      <p className="text-blue-600 mt-2 text-sm">Seat Number: <span className="font-bold text-lg">{bookingSeatNumber}</span></p>
                    </div>
                  </div>
                ) : message ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-green-700 font-semibold text-lg">{message}</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Seat</h3>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Age</label>
                      <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={form.age}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isBooked}
                      className="w-full bg-slate-800 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Complete Booking
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookevent;

