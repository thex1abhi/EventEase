import express from "express"
import { organizerlogin, organizersignup } from "../Controllers/Organizer.controller.js";

const organizerroutes=express.Router();
 
organizerroutes.post('/organizer-signup',organizersignup)
organizerroutes.post('/organizer-login',organizerlogin);

export default organizerroutes;