import express from "express"
import { userlogin, usersignup } from "../Controllers/user.controller.js";

const userroutes = express.Router();

userroutes.post('/user-signup',usersignup)
userroutes.post('/user-login', userlogin);

export default userroutes;