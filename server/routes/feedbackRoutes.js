import express from 'express'
import { feedbackPost } from '../controller/feedbackcontroller.js'

const router = express.Router()

router.route('/').post(feedbackPost)

export default router