import express from 'express'
import { getRewards, getRewardById, upadteReward } from '../controller/rewardController.js'

const router = express.Router()

router.route('/').get(getRewards)
router.route('/:id').get(getRewardById)
router.route('/update').post(upadteReward)

export default router