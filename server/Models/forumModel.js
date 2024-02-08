import mongoose from 'mongoose'

const forumSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }, 
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String, 
        required: true,
        default: "Fising and Education"
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
})

const Forum = mongoose.model("Forum", forumSchema)

export default Forum