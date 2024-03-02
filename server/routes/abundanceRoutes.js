import express from 'express'
import { getAbundanceByState, getAbundanceByFishId } from '../controller/abundanceController.js'

const router = express.Router()

router.route('/state/:state').get(getAbundanceByState)
router.route('/fish/:fishId').get(getAbundanceByFishId)

export default router
