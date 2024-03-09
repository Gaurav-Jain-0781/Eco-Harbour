import asyncHandler from '../middleware/asyncHandler.js'
import Users from '../Models/userModel.js'
import generateToken from '../utils/generateTokens.js'

const authUser = asyncHandler (async (req, res) => {
    const { email, password } = req.body

    const user = await Users.findOne({email})

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        
        res.json({
            _id: user._id,
            first_name : user.first_name, 
            user_name: user.user_name,
            score: user.score
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

const registerUser = asyncHandler(async (req, res) => {
    const { user_name, password, email } = req.body;

    const userExist = await Users.findOne({ email })

    if(userExist){
        res.status(400);
        throw new Error("User already Exist")
    }
    
    const split_name = user_name.split(' ')
    const first_name = split_name[0]

    const user = await Users.create({
        first_name,
        user_name,  
        password, 
        email
    });

    if(user){
        generateToken(res, user._id)

        res.status(201)
        res.json({
            _id: user._id, 
            first_name: user.first_name, 
            email: user.email,
        })
    }
    else{
        res.status(400)
        throw new Error ("Invalid User Data")
    }
})

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true, 
        expires: new Date(0)
    });

    res.status(200)
    res.json({
        message: "Logout Successfull"
    })
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await Users.findById( req.user._id )

    if(user){
        res.status(200)
        res.json({
            _id: user._id, 
            first_name: user.first_name, 
            email: user.email
        })
    }
    else{
        res.status(404)
        throw new Error("No User Found")
    }
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.user._id)

    if(user) {
        user.first_name = req.body.first_name || user.first_name
        user.user_name = req.body.user_name || user.user_name

        if(req.body.password){
            user.password = req.body.password
        }

        const updateUser = await user.save()

        res.status(200)
        res.json({
            _id: user._id, 
            first_name: user.first_name, 
            email: user.email
        })
    }
    else{
        res.status(400)
        throw new Error("No User Found")
    }   
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