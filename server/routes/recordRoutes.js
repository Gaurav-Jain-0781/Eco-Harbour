import express from "express"
import { uploadRecord, getSails, uploadImage, deleteRecord } from '../controller/recordController.js'

const router = express.Router()

router.route('/:id').get(getSails)
router.route('/').post(uploadRecord)
router.route('/delete/:id').delete(deleteRecord)
router.route('/upload').post(uploadImage)

export default router