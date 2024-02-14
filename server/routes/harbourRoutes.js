import express from 'express'
import { getHarbour, getHarbourById, getHarbourByName } from '../controller/harbourController.js'

const router = express.Router()

router.route('/').get(getHarbour)
router.route('/:id').get(getHarbourById)
router.route('/search/:name').get(getHarbourByName)

export default router