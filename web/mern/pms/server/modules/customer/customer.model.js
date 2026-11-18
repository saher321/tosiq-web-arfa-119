import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    joinedDate: { 
        type: Date,
        required: true
    },
    address: { 
        type: String,
        required: false
    }
}, { timestamps: true })

const Customer = mongoose.model("Customer", customerSchema)
export default Customer