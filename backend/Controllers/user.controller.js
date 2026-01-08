import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import user from "../models/user.model.js";

const usersignup = async (req, res) => {
    try {
        const { username, email, password ,address,role} = req.body;
         const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" })
        }  
        const hashpassword = await bcrypt.hash(password, 10);
        const newuser = new user({

            username: username,
            email: email,
            password: hashpassword,
            address:address,
            role:role,
        })
        await newuser.save()
        res.status(200).json({ success: true, message: "User Signup Successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong" })
    }
}

const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existinguser = await user.findOne({ email });
        if (!existinguser) {
            return res.status(401).json({ success: false, message: "User not found" })
        } 
        const comparepassword = await bcrypt.compare(password,existinguser.password);

        if (!comparepassword) {
            return res.status(401).json({ success: false, message: "Invalid Credentials" })
        } 
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        return res.status(200).json({ success: true, message: "  Login Successfull", token,existinguser });
    } catch (error) {
        console.log(error) 
        return res.status(500).json({ errors: error.message })
    }
}

 export {usersignup,userlogin}
