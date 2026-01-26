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



    <nav className="bg-slate-800 text-white shadow">
      <div className="container mx-auto px-3 py-3  flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          EventEase
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white ">
            Home
          </Link>
         

 { isloggedIn ? (
     <button onClick={handlelogout} className=" bg-red-600 px-3 py-2  cursor-pointer rounded-xl text-white" >Logout </button> 
     
 ) :(  
   <div> 
      <Link to="/user-signup" className="text-white mx-3 " >
            Signup
          </Link  >
             <Link to="/user-login" className="text-white mx-3"  >  
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
