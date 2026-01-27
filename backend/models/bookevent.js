import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {

        eventID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Event"
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        phone: String,
        seatNumber: Number,
    }
);

export default mongoose.model("Bookings", BookingSchema)
