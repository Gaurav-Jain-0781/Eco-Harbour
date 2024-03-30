import aysncHandler from "../middleware/asyncHandler.js";
import Forum from '../Models/forumModel.js'

const getForum = aysncHandler(async (req, res) => {
    const posts = await Forum.find({})
    res.json(posts)
})

const getLikes = aysncHandler(async (req, res) => {
    const post = await Forum.findById(req.params.id)
    
    if(post){
        res.status(200)
        console.log(post.likes)
        res.json(post.likes)
    }
    else{
        res.status(400)
        throw new Error("Post Not Found")
    }
})

const forumPost = aysncHandler(async (req, res) => {
    const { title, category, content, user } = req.body;

    const post = await Forum.create({
        user, 
        title, 
        content, 
        category
    })

    if(post){
        res.status(201);
        res.json("Post Created")
    }
    else{
        res.status(400)
        throw new Error("Invalid Content")
    }

})

const updateLikes = aysncHandler(async (req, res) => {
    const { id, user_id } = req.body
    
    const post = await Forum.findById(id)

    if(post){
        post.likes.push(user_id)
        const updatedPost = post.save()
        
        res.status(200)
        res.json("Post Liked")
    }
    else{
        res.status(400)
        throw new Error("Post Not Found")
    }
})

const dislikePost = aysncHandler( async (req, res) => {
    const { id, user_id } = req.body
    const post = await Forum.findById(id)

    if(post){
        post.likes = post.likes.filter((id) => id !== user_id)
        post.save()

        res.status(200)
        res.json("Post Disliked")
    }
    else{
        res.status(400)
        throw new Error("Post Not Found")
    }

})

const updateViews = aysncHandler( async(req, res) => {
    const { id, user_id } = req.body
    const post = await Forum.findById(id)

    if(post){
        post.views.push(user_id)
        const updatedPost = post.save()

        if(updatedPost){
            res.status(200)
            res.json("Post Viewed")
        }
    }
    else{
        res.status(400)
        throw new Error("Post Not Found")
    }
})

export { getForum, getLikes, forumPost, updateLikes, dislikePost, updateViews }