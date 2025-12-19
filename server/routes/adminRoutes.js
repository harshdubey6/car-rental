import express from "express";
import { protect } from "../middleware/auth.js";
import { 
    getAllUsers, 
    getAllVendors, 
    getAllAdmins,
    createUser,
    updateUserStatus,
    deleteUser,
    getAdminDashboard,
    isAdmin
} from "../controllers/adminController.js";

const adminRouter = express.Router();

// All admin routes require authentication and admin role
adminRouter.use(protect);
adminRouter.use(isAdmin);

// Dashboard
adminRouter.get('/dashboard', getAdminDashboard);

// Get all users/vendors/admins
adminRouter.get('/users', getAllUsers);
adminRouter.get('/vendors', getAllVendors);
adminRouter.get('/admins', getAllAdmins);

// Create user/vendor/admin
adminRouter.post('/create', createUser);

// Update user status
adminRouter.post('/update-status', updateUserStatus);

// Delete user/vendor/admin
adminRouter.post('/delete', deleteUser);

export default adminRouter;

