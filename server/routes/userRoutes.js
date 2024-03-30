import express from 'express'
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, reduceScore, authAdmin, countUser, approveSail, getAdminProfile, getUsers, getUserById, deleteUser, updateUser } from '../controller/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, admin, getUsers)
router.route('/').post(registerUser)
router.post('/logout', logoutUser)
router.post('/auth', authUser)
router.route('/reduceScore/:id').post(reduceScore)
router.route('/authAdmin').post(authAdmin, protect, admin)
router.route('/adminProfile').get(protect, admin, getAdminProfile)
router.route('/count').get(protect, admin, countUser)
router.route('/approve/:id').post(protect, admin, approveSail)
router.route('/profile').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)
router.route('/:id').get(protect, admin, getUserById)
router.route('/:id').put(protect, admin, updateUser)

export default router