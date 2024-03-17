import express from "express"
import { uploadRecord } from '../controller/recordController.js'

const router = express.Router()

router.route('/').post(uploadRecord)

export default router