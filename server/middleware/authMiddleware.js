import jwt from 'jsonwebtoken'
import aysncHandler from './asyncHandler.js'
import Users from '../Models/userModel.js'

const protect = aysncHandler( async (req, res, next) => {
    let token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await Users.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(401);
            throw new Error("Unauthorized User, Token Failed");   
        }
    }
    else{
        res.status(401);
        throw new Error("Unauthorized User, No Token");
    }
})

const admin = aysncHandler(async(req, res, next) => {
    if(req.user && req.isAdmin){
        next();
    } else{
        res.status(401);
        throw new Error('Unauthorized Admin')
    }
})

export { protect, admin }