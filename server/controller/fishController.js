import aysncHandler from "../middleware/asyncHandler.js"
import Fish from '../Models/fishModel.js'

const getFishes = aysncHandler(async (req, res) => {
    const fishes = await Fish.find({})
    res.json(fishes);
})

const getFishById = aysncHandler(async (req, res) => {
    const single_fish = Fish.findById(req.params.id)

    if(single_fish){
        return res.json(single_fish)
    }
    else{
        res.status(404)
        throw new Error("Fish Species not Found");
    }
})

export { getFishes, getFishById }