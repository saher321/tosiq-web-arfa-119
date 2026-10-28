import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
    try {
        console.log("Database is connecting")
        const db = await mongoose.connect(process.env.MONGO_URL)
        if (db) {
            console.log("Database is connected:", db.connection.name)
        } else {
            console.log("Failed to connect database")
        }
    } catch (error) {
        console.log(error)
    }
}

export default connectDB