import express from "express"
import { userlogin, usersignup } from "../Controllers/user.controller.js";
import Allevents from "../Controllers/AllEvents.js";
import Homeevents from "../Controllers/HomeEvents.js";
import bookevent from "../Controllers/Bookevent.js";

const userroutes = express.Router();

userroutes.post('/user-signup',usersignup)
userroutes.post('/user-login', userlogin);
userroutes.get('/events', Allevents) 
userroutes.get("/homeevent",Homeevents)  
userroutes.post("/:eventId",bookevent) 
export default userroutes; 