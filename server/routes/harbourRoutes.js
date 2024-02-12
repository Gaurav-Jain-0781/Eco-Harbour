import express from 'express'
import { getHarbour, getHarbourById } from '../controller/harbourController.js'

const router = express.Router()

router.route('/').get(getHarbour)
router.route('/:id').get(getHarbourById)

export default router