import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

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
        const {data} = await axios.post(`${backendurl}/user/user-signup`)   

        if(data.success===true){
            toast.success("User signup Successful") 
            navigate("/")
        }
    } catch (error) { 
        toast.error("Login Failed")
        console.error(response.data.message)
    }
 }

  return <>   
    <Navbar />
   <div className="h-screen flex items-start justify-center bg-slate-900 pt-20 px-4 overflow-hidden">  
    <div className="w-full max-w-md"> 
    <form  onSubmit={handlesubmit} className="bg-slate-800 shadow-md rounded-lg p-6 text-white"> 
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
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-slate-700 transition"> Signup </button> 

          <button className=" w-full mt-4 flex justify-center"> <Link to='/organizer-signup' className="inline-block w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-slate-700 transition"> Signup as Organizer </Link></button>
    </form>  

   </div>   
    
</div>
  </>
};

export default Usersignup;
