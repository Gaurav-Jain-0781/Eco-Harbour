import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    }, 
    full_name: {
        type: String, 
        required: true
    },
    contact_no: {
        type: Number,
        reqquired: true
    }, 
    status: {
        type: String, 
        required: true,
        default: 'Active'
    } 
}, {
    timestamps: true,
})

const Admin = mongoose.model("Admin", adminSchema)

export default Admin