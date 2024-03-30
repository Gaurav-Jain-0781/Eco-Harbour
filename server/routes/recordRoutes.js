import express from "express"
import { getAllSails, getSailById, getSailsByUserId, uploadRecord, deleteRecord, uploadImage, updateRecord, rejectRecord, getProofById } from '../controller/recordController.js'
import upload from '../middleware/multerMiddleware.js'

const router = express.Router()

router.route('/').get(getAllSails)
router.route('/:id').get(getSailById)
router.route('/user/:id').get(getSailsByUserId)
router.route('/').post(uploadRecord)
router.route('/delete/:id').delete(deleteRecord)
router.route('/upload').post(upload.single("image"), uploadImage)
router.route('/update/:id').post(updateRecord)
router.route('/reject/:id').post(rejectRecord)
router.route('/count/:id').get(getProofById)

export default router