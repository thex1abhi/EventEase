import Bookings from "../models/bookevent.js"

const bookevent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { name, age, phone } = req.body;
        const userId = req.user._id;


        const existing = await Bookings.findOne({ userId, eventId })
        if (existing) {
            return res.status(200).json({
                message: "You have already booked this event",
                seatNumber: existing.seatNumber
            })
        }

        let seatNumber;
        const bookedSeats = await Bookings.find({ eventId }).select("seatNumber");
        const usedSeats = bookedSeats.map(b => b.seatNumber);
        const availableSeats = Array.from({ length: 100 }, (_, i => i + 1).filter(
            s => !usedSeats.includes(s)
        ))
        if (availableSeats.lenth === 0) {
            return res.status(400).json({ message: "No Seats Available" });
        }

        seatNumber = availableSeats[math.floor(Math.random() * availableSeats.length)];

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
        return res.status(500).json({ message: error.message })
    }
}; 

export default bookevent;