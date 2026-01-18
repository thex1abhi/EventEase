import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

const Createevent = () => {

  const { backendurl } = useAppContext();
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    date: "",
    price:null,
    type: "",
    image: null, 
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] })
    } else {
      setFormData({
        ...formData, [e.target.name]: e.target.value
      });

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key)=>data.append(key, formData[key]))


    try {
      const response = await axios.post(`${backendurl}/organizer/create-event`, data, {
        headers: { "content-type": "multipart/form-data", 
             Authorization: `Bearer ${localStorage.getItem("org_token")}`
         }
      })
      if (response.data?.success === true) {
        toast.success("Event created ")
        navigate("/events")

      }

    } catch (error) {
      console.log(error)
      toast.error("Error Creating Event")
    }

  }



  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Create Event</h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
            <input 
              type="text" 
              name="name" 
              onChange={handleChange} 
              placeholder="Enter event name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required 
            />
          </div>

     
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input 
              type="text" 
              name="city" 
              onChange={handleChange} 
              placeholder="Enter city name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required 
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input 
              type="text" 
              name="address" 
              onChange={handleChange} 
              placeholder="Enter full address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
            <input 
              type="date" 
              name="date" 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required 
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Price</label>
            <input 
              type="number" 
              name="price" 
              onChange={handleChange} 
              placeholder="Enter ticket price"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required 
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
            <input 
              type="text" 
              name="type" 
              onChange={handleChange} 
              placeholder="E.g., Concert, Conference, Sports"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required 
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Image</label>
            <div className="relative">
              <input 
                type="file" 
                name="image" 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                required 
              />
            </div>
          </div>

       
          <div className="flex gap-4 pt-2">
            <button 
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Event
            </button>
            <button 
              type="reset"
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            > 
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Createevent; 
