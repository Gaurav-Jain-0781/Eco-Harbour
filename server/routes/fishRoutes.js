import express from 'express'
import { getFishes, getFishById, getFishByName } from '../controller/fishController.js'

const router = express.Router()

router.route('/').get(getFishes)
router.route('/:id').get(getFishById)
router.route('/search/:name').get(getFishByName)

export default router