import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {

   const [isloggedIn, setIsloggedIn] = useState(false);
    
   const navigate=useNavigate();

   useEffect(() => {
    const userToken=localStorage.getItem("user_token");
   const adminToken=localStorage.getItem("org_token"); 
    
   if(userToken || adminToken){
    setIsloggedIn(true)
   }else{
    setIsloggedIn(false)
   }   
   }, []);
   
  const handlelogout=()=>{
    localStorage.removeItem("user_token") 
    localStorage.removeItem("org_token") 
    setIsloggedIn(false); 
    toast.success("Logout Successfull")
    navigate("/")
  }

  return (



    <nav className="bg-white shadow">
      <div className="container mx-auto px-3 py-3  flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          EventEase
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-slate-700 hover:text-black">
            Home
          </Link>
         

 { isloggedIn ? (
     <button onClick={handlelogout} className=" bg-red-600 px-3 py-2  cursor-pointer rounded-xl text-white" >Logout </button> 
     
 ) :(  
   <div> 
      <Link to="/user-signup" className="text-slate-700 mx-3 hover:text-black" >
            Signup
          </Link  >
             <Link to="/user-login" className="text-slate-700 mx-3 hover:text-black"  >  
             Login</Link> 
             </div>  
 )
 }
 


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
