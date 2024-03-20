import aysncHandler from '../middleware/asyncHandler.js'
import Reward from '../Models/rewardModel.js'

const getRewards = aysncHandler(async (req, res) => {
    const rewards = await Reward.find()

    if(rewards){
        res.status(200)
        res.json(rewards)
    }
    else{
        res.status(401).json("No Rewards Found")
    }
})

const getRewardById = aysncHandler(async (req, res) => {
    const reward = await Reward.findById(req.params.id)

    if(reward){
        res.status(200)
        res.json(reward)
    }
    else{
        res.status(401).json("Noo Reward Found")
    }
})

const upadteReward = aysncHandler(async (req, res) => {
    const { user_id, rewardId } = req.body
    
    const reward = await Reward.findById(rewardId)

    if(reward){
        reward.claimed = true
        reward.claimed_user = user_id

        const updatedReward = await reward.save()

        res.status(200)
        res.json("Reward Updated")
    }
    else{
        res.status(401).json("Reward Not Found")
    }

})

export { getRewards, getRewardById, upadteReward }