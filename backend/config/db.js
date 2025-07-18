// import mongoose from "mongoose";

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("DB connected")
//     } catch (error) {
//         console.log("db error")
//     }
// }
// export default connectDb

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 45000, // 45 seconds
            
            maxPoolSize: 10,
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
