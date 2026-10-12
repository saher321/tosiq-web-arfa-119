import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        console.log("Database is connecting...")
        const response = await mongoose.connect(process.env.MONGODB_URL)
        if (response) {
            console.log("Database is connected:",response.connection.name)
        }
    } catch (error) {
        console.log(error)
    }
}