import asyncHandler from '../middleware/asyncHandler.js'
import Harbour from '../Models/harbourModel.js'

const getHarbour = asyncHandler(async (req, res) => {
    const harbours = await Harbour.find({})
    res.json(harbours)
})

const getHarbourById = asyncHandler(async(req, res) => {
    const harbour = await Harbour.findById(req.params.id)

    if(harbour){
        return res.json(harbour)
    }
    else{
        res.status = 404;
        throw new Error("Harbour Not Found")
    }
})

export { getHarbour, getHarbourById } 