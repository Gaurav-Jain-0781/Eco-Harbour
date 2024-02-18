import aysncHandler from "../middleware/asyncHandler.js";
import Abundance from '../Models/abundanceModel.js'

const getAbundanceByState = aysncHandler(async (req, res) => {
    const response = await Abundance.find({"state" : req.params.state})

    if(response){
        return res.json(response)
    }
    else{
        res.status(404);
        throw new Error("Abundance not Found")
    }
})

const getAbundanceByFishId = aysncHandler(async (req, res) => {
    const id = req.params.fishId

    console.log("id" , id)

    const response = await Abundance.find({"fishId" : req.params.fishId}) 

    if(response){
        return res.json(response)
    }
    else{
        res.status(404)
        throw new Error("Abundance Not Found")
    }
})


export { getAbundanceByState, getAbundanceByFishId }