import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    }, 
    feedback: {
        type: String
    }
}, {
    timestamps: true
})

const FeedBack = mongoose.model("FeedBack", feedbackSchema)

export default FeedBack