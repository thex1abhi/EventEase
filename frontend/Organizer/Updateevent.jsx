import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateEvent = () => {
  const { backendurl } = useAppContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    date: "",
    price: "",
    type: "",
    image: null,
  });

  const [oldImage, setOldImage] = useState("");
  const [preview, setPreview] = useState("");

  //  Fetch old event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(
          `${backendurl}/organizer/single-event/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("org_token")}`,
            },
          }
        );

        if (data?.success) {
          setFormData({
            name: data.event.name,
            city: data.event.city,
            address: data.event.address,
            date: data.event.date,
            price: data.event.price,
            type: data.event.type,
            image: null,
          });

          setOldImage(data.event.image); 
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load event");
      }
    };

    fetchEvent();
  }, [ id]);


  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  //  Update event
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("city", formData.city);
    data.append("address", formData.address);
    data.append("date", formData.date);
    data.append("price", formData.price);
    data.append("type", formData.type);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.put(
        `${backendurl}/organizer/update-event/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("org_token")}`,
          },
        }
      );

      if (response.data?.success) {
        toast.success("Event updated ");
        navigate("/organizer-dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating event");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-slate-800 text-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-3 text-center">Update Event</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Event Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Event Name"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-white">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">Event Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">Ticket Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Ticket Price"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-white">Event Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Event Type"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-white">Event Image</label>

              {(preview || oldImage) && (
                <img
                  src={preview || oldImage}
                  alt="event"
                  className="w-full h-40 object-cover rounded mb-2"
                />
              )}

              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg text-sm text-white bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Update Event
            </button>

            <button
              type="button"
              onClick={() => {
                setFormData({
                  name: "",
                  city: "",
                  address: "",
                  date: "",
                  price: "",
                  type: "",
                  image: null,
                });
                setPreview("");
              }}
              className="flex-1 bg-gray-200 text-black font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
