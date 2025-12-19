import express from "express";
import { getCars, getUserData, loginUser, loginVendor, loginAdmin, registerUser, registerVendor } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

// User routes
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

// Vendor routes
userRouter.post('/vendor/register', registerVendor)
userRouter.post('/vendor/login', loginVendor)

// Admin routes
userRouter.post('/admin/login', loginAdmin)

// Common routes
userRouter.get('/data', protect, getUserData)
userRouter.get('/cars', getCars)

export default userRouter;