import Event from "../models/createevent.js"

export const updateEvent = async (req, res) => {
    const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({ success: true, event: updatedEvent });
};
