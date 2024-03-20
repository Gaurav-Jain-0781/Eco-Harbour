import aysncHandler from '../middleware/asyncHandler.js'
import CatchRecord from '../Models/recordsModel.js'
import mongoose from 'mongoose'

const uploadRecord = (aysncHandler(async (req, res) => {
    const { user_id, longitude, latitude } = req.body

    const newRecord = await CatchRecord.create({
        user_id, 
        longitude, 
        latitude
    })
    
    if(newRecord){
        res.status(200)
        res.json("Sail Marked")
    }
    else{
        rs.status(400)
        throw new error("Error in Sail")
    }
}))

const getSails = aysncHandler(async (req, res) => {
    const record = await CatchRecord.find({user_id: req.params.id})

    if(record){
        res.status(200)
        res.json(record)
    }
    else{
        res.status(401)
        throw new error("No Sail Found")
    }
})

const uploadImage = aysncHandler(async (req, res) => {
    const { content } = req.body
    console.log(content)
    console.log("Upload Image")
})

const deleteRecord = aysncHandler(async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id)
    const status = await CatchRecord.deleteOne(id)
    
    if(status){
        res.status(200).json(status)
    }
    else {
        res.status(401)
        res.json("Error in Sail Deletion")
    }
})

export { uploadRecord, getSails, uploadImage, deleteRecord }