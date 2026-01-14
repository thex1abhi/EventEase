import multer from "multer"
import {  v2 as cloudinary  } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const EventController = async () => {
 
     
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        })

        const storage = new CloudinaryStorage({
            cloudinary,
            params: {
                folder: "Events",
                allowed_formats: ["jpg", "jpeg", "png"],
            }
        })
        const upload = multer({ storage })
        upload.single("image");

        const { name, city, address, date, type } = req.body;
        const imageUrl = req.file.path;
        const event = new Event({ name, city, address, date, type, image: imageUrl });
        await event.save();

        res.json({ succcess: true, message: "Event Created Successfully", event })
    } catch (error) {
        res.json({ success: false, error: "Failed to create Event" })
    }

};

export default EventController;

