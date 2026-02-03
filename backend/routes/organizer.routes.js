import express from "express"
import { organizerlogin, organizersignup } from "../Controllers/Organizer.controller.js";
import EventController, { upload } from "../Controllers/EventController.js";
import verifyOrganizer from "../middlewares/verifyOrgn.js";
import getMyEvents from "../Controllers/OrgEvents.js";
import { deleteEvent } from "../Controllers/Deleteevent.js";
import  { updateEvent } from "../Controllers/UpdateEvent.js";
import { getSingleEvent } from "../Controllers/Singleevent.js";

const organizerroutes = express.Router();

organizerroutes.post('/organizer-signup', organizersignup)
organizerroutes.post('/organizer-login', organizerlogin);
organizerroutes.post('/create-event', verifyOrganizer, upload.single("image"), EventController)
organizerroutes.get('/my-event', verifyOrganizer, getMyEvents)
organizerroutes.delete("/delete-event/:id", deleteEvent);
organizerroutes.put("/update-event/:id",  upload.single("image"), updateEvent);
organizerroutes.get("/single-event/:id",   getSingleEvent);

export default organizerroutes; 