import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact_no:{
        type: Number, 
        required: true,
    },
},{
        timestamps: true,
})

const User = mongoose.model("User", userSchema)

export default User