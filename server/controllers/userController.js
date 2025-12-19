import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Car from "../models/Car.js";


// Generate JWT Token
const generateToken = (userId)=>{
    const payload = userId;
    return jwt.sign(payload, process.env.JWT_SECRET)
}

// Register User (only for regular users)
export const registerUser = async (req, res)=>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password || password.length < 8){
            return res.json({success: false, message: 'Fill all the fields'})
        }

        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({success: false, message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPassword, role: 'user'})
        const token = generateToken(user._id.toString())
        res.json({success: true, token})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Register Vendor
export const registerVendor = async (req, res)=>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password || password.length < 8){
            return res.json({success: false, message: 'Fill all the fields'})
        }

        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({success: false, message: 'Vendor already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const vendor = await User.create({name, email, password: hashedPassword, role: 'vendor'})
        const token = generateToken(vendor._id.toString())
        res.json({success: true, token})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Login User (for regular users only)
export const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email, role: 'user'})
        if(!user){
            return res.json({success: false, message: "User not found" })
        }
        if(!user.isActive){
            return res.json({success: false, message: "Account is disabled" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false, message: "Invalid Credentials" })
        }
        const token = generateToken(user._id.toString())
        res.json({success: true, token})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Login Vendor
export const loginVendor = async (req, res)=>{
    try {
        const {email, password} = req.body
        const vendor = await User.findOne({email, role: 'vendor'})
        if(!vendor){
            return res.json({success: false, message: "Vendor not found" })
        }
        if(!vendor.isActive){
            return res.json({success: false, message: "Account is disabled" })
        }
        const isMatch = await bcrypt.compare(password, vendor.password)
        if(!isMatch){
            return res.json({success: false, message: "Invalid Credentials" })
        }
        const token = generateToken(vendor._id.toString())
        res.json({success: true, token})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Login Admin
export const loginAdmin = async (req, res)=>{
    try {
        const {email, password} = req.body
        const admin = await User.findOne({email, role: 'admin'})
        if(!admin){
            return res.json({success: false, message: "Admin not found" })
        }
        if(!admin.isActive){
            return res.json({success: false, message: "Account is disabled" })
        }
        const isMatch = await bcrypt.compare(password, admin.password)
        if(!isMatch){
            return res.json({success: false, message: "Invalid Credentials" })
        }
        const token = generateToken(admin._id.toString())
        res.json({success: true, token})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Get User data using Token (JWT)
export const getUserData = async (req, res) =>{
    try {
        const {user} = req;
        res.json({success: true, user})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Get All Cars for the Frontend
export const getCars = async (req, res) =>{
    try {
        const cars = await Car.find({isAvaliable: true})
        res.json({success: true, cars})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}