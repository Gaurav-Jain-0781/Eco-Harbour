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
    email: {
        type: String,
    },
    contact_no:{
        type: Number, 
        required: true,
        unique: true,
    },
    status: {
        type: String, 
        required: true,
        default: 'Active'
    },
    score: {
        type: Number, 
        default: 0,
    },
    isAdmin: {
        type: Boolean, 
        default: false,
    }
},{
        timestamps: true,
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }
    
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const Users = mongoose.model("Users", userSchema)

export default Users