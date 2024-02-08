import mongoose from 'mongoose'

const MRASchema = new mongoose.Schema({
    MPA_Name: {
        type: String,
        required: true,
    },
    Longitude: {
        type: String, 
        required: true
    },
    Latitude: {
        type: String, 
        required: true
    },
    Area: {
        type: Number,
        required: true,
        default: 0
    },
    "State/UT": {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const MRA = mongoose.model("MRA", MRASchema)

export default MRA