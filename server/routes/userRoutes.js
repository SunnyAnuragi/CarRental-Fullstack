import express from "express";
import { getCars, getUserData, loginUser, registerUser, googleLogin } from "../controllers/userController.js";
import { addTestimonial, getTestimonials } from "../controllers/testimonialController.js";
import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/google-login', googleLogin)
userRouter.get('/data', protect, getUserData)
userRouter.get('/cars', getCars)
userRouter.post('/add-testimonial', protect, addTestimonial)
userRouter.get('/testimonials', getTestimonials)

export default userRouter;