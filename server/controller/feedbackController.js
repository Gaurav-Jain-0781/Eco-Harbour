import aysncHandler from "../middleware/asyncHandler.js"
import FeedBack from '../Models/feedbackModel.js'

const feedbackPost = aysncHandler(async (req, res) => {
    const { name, email, subject, feedback } = req.body

    const newFeedback = await FeedBack.create({
        name, 
        email, 
        subject, 
        feedback
    })

    if(newFeedback){
        res.status(200)
        res.json("Feedback Posted")
    }
    else{
        res.status(400)
        throw new error("Feedback Failed")
    }

})

export { feedbackPost }