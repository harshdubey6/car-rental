import User from "../models/User.js";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";
import bcrypt from "bcrypt";

// Middleware to check if user is admin
export const isAdmin = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.json({ success: false, message: "Admin access required" });
    }
    next();
}

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ role: 'user' }).select("-password").sort({ createdAt: -1 });
        res.json({ success: true, users });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Get all vendors
export const getAllVendors = async (req, res) => {
    try {
        const vendors = await User.find({ role: 'vendor' }).select("-password").sort({ createdAt: -1 });
        res.json({ success: true, vendors });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Get all admins
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' }).select("-password").sort({ createdAt: -1 });
        res.json({ success: true, admins });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Create new user
export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if(!name || !email || !password || password.length < 8){
            return res.json({ success: false, message: 'Fill all the fields' });
        }

        if(!['user', 'vendor', 'admin'].includes(role)){
            return res.json({ success: false, message: 'Invalid role' });
        }

        const userExists = await User.findOne({ email });
        if(userExists){
            return res.json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, role });
        
        res.json({ success: true, message: `${role} created successfully`, user });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Update user status (enable/disable)
export const updateUserStatus = async (req, res) => {
    try {
        const { userId, isActive } = req.body;
        
        const user = await User.findById(userId);
        if(!user){
            return res.json({ success: false, message: 'User not found' });
        }

        user.isActive = isActive;
        await user.save();

        res.json({ success: true, message: `User ${isActive ? 'enabled' : 'disabled'} successfully` });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Delete user/vendor/admin
export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.body;
        
        const user = await User.findById(userId);
        if(!user){
            return res.json({ success: false, message: 'User not found' });
        }

        // If vendor, remove their cars
        if(user.role === 'vendor'){
            await Car.updateMany({ owner: userId }, { owner: null, isAvaliable: false });
        }

        await User.findByIdAndDelete(userId);
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}


// Get dashboard statistics
export const getAdminDashboard = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({ role: 'user' });
        const totalVendors = await User.countDocuments({ role: 'vendor' });
        const totalCars = await Car.countDocuments();
        const totalBookings = await Booking.countDocuments();
        const activeUsers = await User.countDocuments({ role: 'user', isActive: true });
        const activeVendors = await User.countDocuments({ role: 'vendor', isActive: true });
        
        const recentUsers = await User.find({ role: 'user' }).select("-password").sort({ createdAt: -1 }).limit(5);
        const recentVendors = await User.find({ role: 'vendor' }).select("-password").sort({ createdAt: -1 }).limit(5);
        const recentBookings = await Booking.find().populate('car user').select("-user.password").sort({ createdAt: -1 }).limit(5);

        const dashboardData = {
            totalUsers,
            totalVendors,
            totalCars,
            totalBookings,
            activeUsers,
            activeVendors,
            recentUsers,
            recentVendors,
            recentBookings
        };

        res.json({ success: true, dashboardData });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

