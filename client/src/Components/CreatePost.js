import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreatePost = () => {
  const navigate = useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault()

    const title = document.forms["post"].title.value;
    const category = document.forms["post"].category.value
    const content = document.getElementById('content').value

    try{
      const { data } = await axios.get('/user/profile')
      if(data._id){
        try {
          const user = data._id
          const response = await axios.post('/post/new', {
            title, 
            category, 
            content, 
            user
          })
          toast.success("Post Successful")
          navigate('/forum')
        } catch (error) {
          if(error.response.message.data === "Invalid Content") {
            toast.error("Please Verify Data")
          }
          else{
            console.log(error)
          }
        } 
      }
      else{
        toast.warning("Login to post and engage with us!")
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      toast.warning("Login to post and engage with us!")
      navigate('/login')
    }
  }

  return (
    <div>
      <form class="post-form" name="post" onSubmit={handelSubmit}>
        <h2>Share your Insights</h2>
        <label>Title 
          <input id='title' name='title' type='text'/>
        </label>
        <label>Category 
          <input id='category' name='category' type='text'/>
        </label>
        <label>Content
          <textarea id="content" name="content" rows="20" cols="50"></textarea>
        </label>
        <button className='btn' type="submit">Post</button>
      </form>
    </div>
  )
}

export default CreatePost
