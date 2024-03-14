import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiLike, BiSolidLike  } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'
import { toast } from 'react-toastify'
import axios from 'axios'
import Spinner from './Spinner'

const Community = () => {  
  return (
    <section id='community'>
      <div id="page-header">
        <img src='/images/forum.png' alt='forum_page'/>
        <div>
          <h2>Let's start a new community ! </h2>
          <button className='btn'><Link to='/forum/post'>Join Now</Link></button>
        </div>
      </div>
    </section>
  )
}

export const Post = () => {
  const [loading, setLoading] = useState(false)
  const [reading, setReading] = useState({})
  const [post, setPost] = useState([])
  const [likedPost, setLikedPost] = useState({})

  const navigate = useNavigate()

  const likepost = async (id) => {
    try {
      const { data } = await axios.get('user/profile/')
      if(data._id){
        const user_id = data._id
        try {
          const response = await axios.post('/post/update', {
            id, 
            user_id
          })

          setLikedPost(prevLikedPosts => ({
            ...prevLikedPosts,
            [id]: true 
          }), () => {
            localStorage.setItem('likedPosts', JSON.stringify(likedPost));
          });
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      } else{
        toast.warning("Login to engage with Community!")
        navigate('/login')
      }
    } catch (error) {
      if(error.response.data.message === "Post Not Found"){
        toast.error("Could Not Like")
      }
      else {
        toast.warning("Login to engage with Community!")
        navigate('/login')
        console.log(error)
      }
    }
  } 

  const unlikepost = async(id) => {
    try {
      const { data } = await axios.get('user/profile/')
      if(data._id){
        const user_id = data._id
        try{
          const response = await axios.post('post/dislike', {
            id, 
            user_id
          })

          setLikedPost(prevLikedPosts => ({
            ...prevLikedPosts,
            [id]: false
          }), () => {
            localStorage.setItem('likedPosts', JSON.stringify(likedPost));
          });
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      } 
      else{
        toast.warning("Login to engage with Community!")
        navigate('/login')
      } 
    } catch (error) {
      if(error.response.data.message === "Post Not Found"){
        toast.error("Dislike Operation Failed")
      }
      else{
        toast.warning("Login to engage with Community!")
        navigate('/login')
        console.log(error)
      }
    }
  }

  const updateView = async(id) => {
    try {
      const { data } = await axios.get('user/profile/')
      if(data._id){
        const user_id = data._id
        try {
          const response = await axios.post('post/views', {
            id, 
            user_id
          })
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
      else{
        toast.warning("Login to engage with Community!")
        navigate('/login')
      }
    } catch (error) {
      if(error.response.data.message === "Post Not Found"){
        toast.error("View Operation Failed")
      }
      else{
        toast.warning("Login to engage with Community!")
        navigate('/login')
        console.log(error)
      }
    }
  } 

  const toogleReading = (postId) => {
    setReading(prevState => ({
      ...prevState, 
      [postId] : !prevState[postId]
    }))
    updateView(postId)
  }

  useEffect(() => {
    const getLikedPost = async() => {
      const likedStatus = {}
      try{
        const { data } = await axios.get('user/profile')
        if(data._id){
          const user_id = data._id
          
          for(const item of post) {
            const { data:likes } = await axios.get(`/post/likes/${item.id}`);
             const isLiked = likes.include(user_id)
             likedStatus[item._id] = isLiked
          }
        }
        setLikedPost(likedStatus)
      } catch (error) {
        console.log(error)
      }
    }
    getLikedPost()
  }, [post])

  useEffect(() => {
    const getPost = async() => {
      try{
        setLoading(true)
        const { data } = await axios.get('/post')
        setPost(data)

        const likedPostsFromStorage = JSON.parse(localStorage.getItem('likedPosts')) || {};
        setLikedPost(likedPostsFromStorage);

        const initialReading = {};
        data.forEach(item => {
          initialReading[item._id] = false; 
        });
        setReading(initialReading);
      } catch (error) {
        console.log("Error", error)
      } finally {
        setLoading(false)
      }
    }
    getPost()
  }, [])

  if(loading){
    return <Spinner/>
  }

  return(
    <section id='post'>
      <h2>It's Trending</h2>
      {post.map((item) => {
        return(
          <div className="post-item" key={item._id}>
            <div className='post-name'>
              {item.user.slice(0, 1).toUpperCase()}
            </div>
            <div className="post-content">
                <h2>{item.title}</h2>
                <p>Category : {item.category}</p>
                <p>
                  {reading[item._id] ? item.content : item.content.slice(0, 200)} 
                  <button onClick={() => toogleReading(item._id)}>
                    {reading[item._id] ? 'Read Less...' : 'Read More .....'}
                  </button>
                </p>
                <p _id='like'>
                  {likedPost[item._id] ? <BiSolidLike onClick={() => unlikepost(item._id)}/> : <BiLike onClick={() => likepost(item._id)}/>}
                  {item.likes.length}  
                  <FaEye />
                  {item.views.length}
                </p>
            </div>
          </div>
        )
      })}
    </section>  
  )
}

export default Community
