import mongoose from 'mongoose'

const rewardSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    description: {
        type: String, 
    }, 
    points: {
        type: Number
    }, 
    claimed: {
        type: Boolean, 
        default: false
    }, 
    claimed_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    image_url: {
        type: String,
    }
}, {
    timestamps :true
})

const Reward = mongoose.model("Reward", rewardSchema)

export default Reward