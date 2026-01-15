import express from "express"
import { organizerlogin, organizersignup } from "../Controllers/Organizer.controller.js";
import EventController, { upload } from "../Controllers/EventController.js";
import Allevents from "../Controllers/AllEvents.js";

const organizerroutes=express.Router();
 
organizerroutes.post('/organizer-signup',organizersignup)
organizerroutes.post('/organizer-login',organizerlogin);
organizerroutes.post('/create-event', upload.single("image"), EventController) 
organizerroutes.get('/events', Allevents) 
 

export default organizerroutes; 