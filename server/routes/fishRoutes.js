import express from 'express'
import { getFishes, getFishById } from '../controller/fishController.js'

const router = express.Router()

router.route('/').get(getFishes)
router.route('/:id').get(getFishById)

export default router