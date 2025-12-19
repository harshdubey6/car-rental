import mongoose from "mongoose";
import "dotenv/config";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const createAdmin = async () => {
    try {
        // Connect to database
        await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);
        console.log("Database connected");

        // Default admin credentials
        const adminEmail = process.env.ADMIN_EMAIL || "admin@carrent.com";
        const adminPassword = process.env.ADMIN_PASSWORD || "admin12345";
        const adminName = process.env.ADMIN_NAME || "Admin";

        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: adminEmail, role: 'admin' });
        
        if (existingAdmin) {
            console.log("Admin already exists!");
            console.log(`Email: ${adminEmail}`);
            console.log("To reset password, delete the admin from database first.");
            process.exit(0);
        }

        // Create admin
        const hashedPassword = await bcrypt.hash(adminPassword, 10);
        const admin = await User.create({
            name: adminName,
            email: adminEmail,
            password: hashedPassword,
            role: 'admin',
            isActive: true
        });

        console.log("✅ Admin created successfully!");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("Admin Credentials:");
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("⚠️  Please change the password after first login!");
        
        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error.message);
        process.exit(1);
    }
};

createAdmin();

