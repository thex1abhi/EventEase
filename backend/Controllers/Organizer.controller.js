import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Organizer from "../models/Organizer.model.js";

const organizersignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
         const existingOrganizer = await Organizer.findOne({ email });
        if (existingOrganizer) {
            return res.status(409).json({ success: false, message: "Email already exists" })
        }  
        const hashpassword = await bcrypt.hash(password, 10);
        const organizer = new Organizer({

            name: name,
            email: email,
            password: hashpassword,
        })
        await organizer.save()
        res.status(200).json({ success: true, message: "Organizer created Successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong" })
    }
}

const organizerlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const organizer = await Organizer.findOne({ email });
        if (!organizer) {
            return res.status(401).json({ success: false, message: "Organizer not found" })
        } 
        const comparepassword = await bcrypt.compare(password, organizer.password);

        if (!comparepassword) {
            return res.status(401).json({ success: false, message: "Invalid Credentials" })
        } 
        const org_token = jwt.sign({ id: organizer._id }, process.env.JWT_SECRET)
        return res.status(200).json({ success: true, message: "  Login Successfull", org_token ,organizer });
    } catch (error) {
        console.log(error) 
        return res.status(500).json({ errors: error })
    }
}

 export {organizersignup,organizerlogin}
