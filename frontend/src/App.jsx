import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Userlogin from "../User/Userlogin";
  
import Usersignup from "../User/Usersignup";
import Orgsignup from "../Organizer/Orgsignup" 
import Orglogin from "../Organizer/Orglogin"
import { ToastContainer, toast } from 'react-toastify';
import Orgdashboard from "../Organizer/Orgdashboard";
import Createevent from "../Organizer/Createevent";
import Allevent from "../Organizer/Events";
import Events from "../Organizer/Events";

const App = () => {
  return (
    <BrowserRouter> 
  <ToastContainer  position="top-right"
autoClose={1000} />
      <Routes> 
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/user-signup" element= { <Usersignup/> } />
        <Route path="/user-login" element= { <Userlogin/> } /> 
         <Route path="/organizer-signup" element= { < Orgsignup /> } />
        <Route path="/organizer-login" element= { <  Orglogin  /> } /> 
       <Route path="/organizer-dashboard" element={ <Orgdashboard /> }  /> 
         <Route path="/create-event" element={ <Createevent /> }  /> 
        <Route path="/all-events" element={ <Allevent /> }  /> 
         <Route path="/org-events" element={ <Events /> }  /> 
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

