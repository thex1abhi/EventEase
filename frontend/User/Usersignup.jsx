import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { MdCancel } from "react-icons/md"; 
import { FaArrowAltCircleRight } from "react-icons/fa";



const Usersignup = () => { 

 const [username, setusername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [address, setaddress] = useState("");
 const [error, seterror] = useState(""); 
const  { backendurl } =useAppContext(); 

const navigate = useNavigate();
 
 const  handlesubmit= async(e) => { 
    e.preventDefault()
    try { 
        // send the form fields in the request body and include the API prefix
        const details = { username, email, password, address, role: 'user' };
        const { data } = await axios.post(`${backendurl}/user/user-signup`, details);

         if(data.success===true){
             toast.success("User signup Successful") 
             navigate("/user-login")
         }
    } catch (error) { 
        toast.error("Signup Failed")
        // safe error logging
        console.error(error?.response?.data?.message || error.message)
        seterror(error?.response?.data?.message || "Signup failed")
    }
 }

  return <>   
    
   <div className="h-screen flex items-start justify-center bg-gray-300 pt-20 px-4 overflow-hidden">  
    <div className="w-full max-w-md"> 
    <form  onSubmit={handlesubmit} className="bg-slate-900 shadow-md rounded-lg p-6 text-white"> 
        

 <div className="relative mb-4">
  <Link
    to="/"
    className="absolute top-1 right-5 text-gray-500 hover:text-red-600"
  >
    <MdCancel size={22} />
  </Link>

  <div className="text-xl font-semibold text-center">
    User Signup
  </div>
</div>  

          <input type="text" placeholder="Enter  username "   value={username} 
        onChange={ (e)=> setusername(e.target.value)} 
        className="w-full px-4 py-2 bg-slate-700 text-white placeholder-slate-300 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 mb-4" 
          /> 
 
   <input type="email" placeholder="Enter  E-mail "   value={email} 
        onChange={(e)=> setEmail(e.target.value)} 
        className="w-full px-4 py-2 bg-slate-700 text-white placeholder-slate-300 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 mb-4" 
          /> 
  
   <input type="password" placeholder="Enter Password "   value={password} 
        onChange={(e)=> setPassword(e.target.value)} 
        className="w-full px-4 py-2 bg-slate-700 text-white placeholder-slate-300 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 mb-4" 
          /> 
 
  <input type="text" placeholder="Enter Address "   value={address} 
        onChange={(e)=> setaddress(e.target.value)} 
        className="w-full px-4 py-2 bg-slate-700 text-white placeholder-slate-300 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 mb-4" 
          />   
          <div className="text-red-400 text-sm mb-4"> {error}  </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-slate-700 transition"> Signup User </button> 

          <Link to="/organizer-signup" className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-slate-700 transition">
            Organizer Signup <FaArrowAltCircleRight />
          </Link>
   
      

    </form>  

   </div>   
    
</div>
  </>
};

export default Usersignup;
