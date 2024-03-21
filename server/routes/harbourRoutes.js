import express from 'express'
import { getHarbour, getHarbourById, getHarbourByName, getHarbourByState } from '../controller/harbourController.js'

const router = express.Router()

router.route('/').get(getHarbour)
router.route('/:id').get(getHarbourById)
router.route('/search/:name').get(getHarbourByName)
router.route('/state/:state').get(getHarbourByState)

export default router