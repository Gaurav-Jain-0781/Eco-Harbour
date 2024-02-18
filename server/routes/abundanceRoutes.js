import express from 'express'
import { getAbundanceByState, getAbundanceByFishId } from '../controller/abundanceController.js'

const router = express.Router()

router.route('/:state').get(getAbundanceByState)
router.route('/:fishId').get(getAbundanceByFishId)

export default router
