import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {

        eventId: {
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
        phone: {
            type: String,
            required: true
        },
        seatNumber: Number,
    },
    { timestamps: true }
);

// Unique compound index to prevent duplicate bookings using phone number
BookingSchema.index({ phone: 1, eventId: 1 }, { unique: true });

export default mongoose.model("Bookings", BookingSchema)
