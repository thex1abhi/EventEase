import Event from "../models/createevent.js";

export const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    await Event.findByIdAndDelete(eventId);

    res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}; 

