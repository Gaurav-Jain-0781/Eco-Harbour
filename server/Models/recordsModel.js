import mongoose from 'mongoose'

const recordSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "User"
    },  
    search: {
        type: String, 
        reuired: true
    },
    longitude: {
        type: Number, 
        required: true
    }, 
    latitude: {
        type: Number, 
        required: true
    },
    image: {
        type: String, 
        default: ''
    }, 
    status: {
        type: String,
        default: 'Not Verified'
    }, 
    admin_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
}, {
    timestamps: true
})

const CatchRecord = mongoose.model("CatchRecord", recordSchema)

export default CatchRecord