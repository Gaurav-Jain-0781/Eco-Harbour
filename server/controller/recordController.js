import aysncHandler from '../middleware/asyncHandler.js'
import CatchRecord from '../Models/recordsModel.js'

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

export { uploadRecord }