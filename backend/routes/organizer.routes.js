import express from "express"
import { organizerlogin, organizersignup } from "../Controllers/Organizer.controller.js";
import EventController, { upload } from "../Controllers/EventController.js";

import verifyOrganizer from "../middlewares/VerifyOrgn.js";
import getMyEvents from "../Controllers/OrgEvents.js";


const organizerroutes=express.Router();
 
organizerroutes.post('/organizer-signup',organizersignup)
organizerroutes.post('/organizer-login',organizerlogin);
organizerroutes.post('/create-event' ,verifyOrganizer,upload.single("image"), EventController) 

organizerroutes.get('/my-event',verifyOrganizer, getMyEvents) 
 

export default organizerroutes; 