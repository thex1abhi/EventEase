// This file returns the events created by org   
import Event from "../models/createevent.js" 

const getMyEvents = async (req, res) => {
  try {
    const events = await Event.find({
      organizerId: req.organizerId
    });

    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ error });
  }
}; 
 
export default getMyEvents; 