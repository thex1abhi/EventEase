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
        headers: { "content-type": "multipart/form-data" }
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
    <>
      <form onSubmit={handleSubmit}>

        <h2> Create Event  </h2>
        <input type="text" name="name" onChange={handleChange} placeholder="Event Name" required />

        <input type="text" name="city" onChange={handleChange} placeholder="Event City" required />

        <input type="text" name="address" onChange={handleChange} placeholder="Event Address" required />

        <input type="date" name="date" onChange={handleChange} placeholder="Event Date" required />
 
 <input type="number" name="price" onChange={handleChange} placeholder="Ticket Price" required />
 

        <input type="text" name="type" onChange={handleChange} placeholder="Event Type" required />


        <input type="file" name="image" onChange={handleChange} required />

        <button type="submit"> Create Event  </button>
        <button onClick={() => setFormData("")} > Reset  </button>
      </form>
    </>
  )
}

export default Createevent;
