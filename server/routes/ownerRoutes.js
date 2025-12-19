import express from "express";
import { protect } from "../middleware/auth.js";
import { addCar, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailability, updateUserImage } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const vendorRouter = express.Router();

// All vendor routes require authentication and vendor role
vendorRouter.use(protect);

// Middleware to check vendor role
vendorRouter.use((req, res, next) => {
    if(req.user.role !== 'vendor'){
        return res.json({ success: false, message: "Vendor access required" });
    }
    next();
});

vendorRouter.post("/add-car", upload.single("image"), addCar)
vendorRouter.get("/cars", getOwnerCars)
vendorRouter.post("/toggle-car", toggleCarAvailability)
vendorRouter.post("/delete-car", deleteCar)
vendorRouter.get('/dashboard', getDashboardData)
vendorRouter.post('/update-image', upload.single("image"), updateUserImage)

export default vendorRouter;