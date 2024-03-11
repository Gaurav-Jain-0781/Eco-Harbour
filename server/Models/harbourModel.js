import mongoose from 'mongoose'

const harbourSchema = new mongoose.Schema({
    name: {
        type: String, 
        required :true,
    },
    longitude: {
        type: String,
        required: true,
    }, 
    latitude: {
        type: String,
        required: true,
    }, 
    location: {
        type: String,
        required: true,
    }, 
    district: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }, 
    rating: {
        type: Number, 
        default: 0,
    }
})

const Harbour = mongoose.model("Harbour", harbourSchema)

export default Harbour