// import express from 'express'
// import { login, logout, signup } from '../controllers/auth.controllers.js';


// const router = express.Router();


// // Instead of the callback function here, we will use controllers

// // router.get("/signup", (req, res)=>{
// //     res.send("SignUp Route")
// // })

// router.post("/signup", signup)

// router.post("/login", login)

// router.post("/logout", logout)


// export default router;

import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;