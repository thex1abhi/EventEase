import Bookings from "../models/bookevent.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const bookevent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { name, age, phone } = req.body;

        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        let userId;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            userId = new mongoose.Types.ObjectId(decoded.id);
        } catch (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        if (!name || !age || !phone) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Check for existing booking with same phone number and event
        const existing = await Bookings.findOne({ phone, eventId })
        if (existing) {
            return res.status(400).json({
                alreadyBooked: true,
                message: "This phone number has already booked this event",
                seatNumber: existing.seatNumber
            })
        }

        let seatNumber;
        const bookedSeats = await Bookings.find({ eventId }).select("seatNumber");
        const usedSeats = bookedSeats.map(b => b.seatNumber);
        const availableSeats = Array.from({ length: 100 }, (_, i) => i + 1).filter(
            s => !usedSeats.includes(s)
        );
        if (availableSeats.length === 0) {
            return res.status(400).json({ message: "No Seats Available" });
        }

        seatNumber = availableSeats[Math.floor(Math.random() * availableSeats.length)];

        const booking = await Bookings.create({
            userId,
            eventId,
            name,
            age,
            phone,
            seatNumber,
        })
        res.status(201).json({
            message: "Event Booked Successfully", booking
        })

    } catch (error) {
      
        if (error.code === 11000) {
            return res.status(400).json({
                alreadyBooked: true,
                message: "This phone number has already booked this event"
            })
        }
        return res.status(500).json({ message: error.message })
    }
};

export default bookevent;