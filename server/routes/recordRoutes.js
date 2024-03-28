import express from "express"
import { getAllSails, getSailById, getSailsByUserId, uploadRecord, deleteRecord, uploadImage } from '../controller/recordController.js'
import upload from '../middleware/multerMiddleware.js'

const router = express.Router()

router.route('/').get(getAllSails)
router.route('/id/:id').get(getSailById)
router.route('/:id').get(getSailsByUserId)
router.route('/').post(uploadRecord)
router.route('/delete/:id').delete(deleteRecord)
router.route('/upload').post(upload.single("image"), uploadImage)

export default router