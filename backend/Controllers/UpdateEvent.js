import Event from "../models/createevent.js";

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    
    event.name = req.body.name;
    event.city = req.body.city;
    event.address = req.body.address;
    event.price = req.body.price;
    event.type = req.body.type;
    event.date = new Date(req.body.date);

    // Update image only if new one uploaded
    if (req.file) {
      event.image = req.file.path; 
    }

    await event.save();

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update event",
    });
  }
};

export default updateEvent;
