import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import Event from "../models/createevent.js"
import dotenv from "dotenv";
dotenv.config(); 

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})



// Create multer upload middleware
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "events",
        allowed_formats: ["jpg", "jpeg", "png"],
    }
})

export const upload = multer({ storage });

const EventController = async (req, res) => {
    try {
        const { name, city, address, date, price, type } = req.body;
        const imageUrl = req.file?.path || "";
        
        if (!name || !city || !address || !date || !price || !type || !imageUrl) {
            return res.json({ success: false, error: "All fields are required including image" })
        }

        const event = new Event({ name, city, address, date, price, type, image: imageUrl });
        await event.save();
        return res.json({ success: true, message: "Event Created Successfully", event })

    } catch (error) {
        console.log(error);
        return res.json({ success: false, error: error.message || "Failed to create Event" })
    }

};

export default EventController;

