import express from 'express'
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser } from '../controller/userController.js'

const router = express.Router()

router.route('/').get(getUsers)
router.route('/').post(registerUser)
router.post('/logout', logoutUser)
router.post('/login', authUser)
router.route('/profile').get(getUserProfile)
router.route('/profile').put(updateUserProfile)
router.route('/:id').delete(deleteUser)
router.route('/:id').get(getUserById)
router.route('/:id').put(updateUser)

export default router