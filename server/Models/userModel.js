import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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
    score: {
        type: Number, 
        default: 0,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contact_no:{
        type: Number, 
        required: true,
    },
},{
        timestamps: true,
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const Users = mongoose.model("Users", userSchema)

export default Users