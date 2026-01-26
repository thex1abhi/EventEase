import Event from "../models/createevent.js";

export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } 
    );

    if (!updatedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update event",
      error: error.message,
    });
  }
};

export default updateEvent;