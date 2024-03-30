import aysncHandler from '../middleware/asyncHandler.js'
import CatchRecord from '../Models/recordsModel.js'
import mongoose from 'mongoose'

const getAllSails = aysncHandler(async (req, res) => {
    const records = await CatchRecord.find({})

    if(records) {
        const data = records.filter((record) => record.status === "Not Verified")
        
        res.status(200)
        res.json(data)
    }
    else{
        res.status(401)
        res.json("No Records found")
    }
})

const getSailById = aysncHandler(async (req, res) => {
    const record = await CatchRecord.findById(req.params.id)

    if(record){
        res.status(200)
        res.json(record)
    }
    else{
        res.status(401)
        res.json("Record Not Found")
    }
})

const getSailsByUserId = aysncHandler(async (req, res) => {
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

const uploadRecord = (aysncHandler(async (req, res) => {
    const { user_id, search, longitude, latitude } = req.body

    const newRecord = await CatchRecord.create({
        user_id, 
        search,
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

const uploadImage = aysncHandler(async (req, res) => {
    const filePath = req.file.path
    const { id } = req.body
    const record = await CatchRecord.findById(id)

    if(record){
        record.image = filePath

        const updatedRecord = await record.save()        
        res.status(200)
        res.json("Image Uploaded")
    }
    else{
        res.status(401)
        res.json("Uplaod failed")
    }
})

const updateRecord = aysncHandler(async (req, res) =>  {
    const record = await CatchRecord.findById(req.params.id)
    const { adminId } = req.body
    
    if(record){
        record.status = "Verified"
        record.admin_id = adminId
        
        const updatedRecord = record.save()
        if(updatedRecord){
            res.status(201)
            res.json("Record Updated")
        }
        else{
            res.status(401)
            res.json("Record Updation Failed")
        }
    }
    else{
        res.status(401);
        res.json("No Record Found")
    }
})


const rejectRecord = aysncHandler(async (req, res) =>  {
    const record = await CatchRecord.findById(req.params.id)
    const { adminId } = req.body
    
    if(record){
        record.status = "Rejected"
        record.admin_id = adminId
        
        const updatedRecord = record.save()
        if(updatedRecord){
            res.status(201)
            res.json("Sail Rejected")
        }
        else{
            res.status(401)
            res.json("Sail Rejection Failed")
        }
    }
    else{
        res.status(401);
        res.json("No Record Found")
    }
})

const getProofById = aysncHandler(async (req, res) => {
    const records = await CatchRecord.find({ admin_id: req.params.id})

    if(records){
        res.status(200)
        res.json(records.length)
    }
    else{
        res.status(401)
        res.json("Records Not Found")
    }
})

export { getAllSails, getSailById, getSailsByUserId, uploadRecord, deleteRecord, uploadImage, updateRecord, rejectRecord, getProofById }