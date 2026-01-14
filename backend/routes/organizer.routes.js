import express from "express"
import { organizerlogin, organizersignup } from "../Controllers/Organizer.controller.js";
import EventController from "../Controllers/EventController.js";

const organizerroutes=express.Router();
 
organizerroutes.post('/organizer-signup',organizersignup)
organizerroutes.post('/organizer-login',organizerlogin);
organizerroutes.post('/create-event',EventController)
export default organizerroutes; 