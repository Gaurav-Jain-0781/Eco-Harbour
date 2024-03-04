import aysncHandler from '../middleware/asyncHandler.js'
import asyncHandler from '../middleware/asyncHandler.js'
import Users from '../Models/userModel.js'

const authUser = asyncHandler (async (req, res) => {
    const { email, password } = req.body

    const user = await Users.findOne({email})

    if(user && (await user.matchPassword(password))) {
        res.send({
            _id: user._id,
            first_name : user.first_name, 
            user_name: user.user_name,
            score: user.score
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }

    res.send("Authentic User")
})

const registerUser = asyncHandler(async (req, res) => {
    res.send("Registration Done")
})

const logoutUser = asyncHandler(async (req, res) => {
    res.send("User Logout")
})

const getUserProfile = asyncHandler(async (req, res) => {
    res.send("User Profile")
})

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("Update Profile")
})

const getUsers = asyncHandler(async (req, res) => {
    res.send("Get All Users")
})

const getUserById = asyncHandler(async (req, res) => {
    res.send("Get User By ID")
})

const deleteUser = asyncHandler(async (req, res) => {
    res.send("Delete User")
})

const updateUser = asyncHandler(async (req, res) => {
    res.send("Update User by Admin")
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser }