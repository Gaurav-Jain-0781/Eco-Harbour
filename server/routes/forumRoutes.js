import express from "express";
import { getForum, getLikes, forumPost, updateLikes, dislikePost, updateViews } from '../controller/forumController.js'

const router = express.Router()

router.route('/').get(getForum)
router.route('/likes/:id').get(getLikes)
router.route('/new').post(forumPost)
router.route('/update').post(updateLikes)
router.route('/dislike').post(dislikePost)
router.route('/views').post(updateViews)

export default router