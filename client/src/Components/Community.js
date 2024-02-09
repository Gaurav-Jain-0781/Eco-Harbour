import React, { useState } from 'react'
import { forum } from './Data'
import { Link } from 'react-router-dom'
import { BiLike, BiSolidLike  } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'

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
  const [data, setData] = useState(forum)
  const [liked, setLiked] = useState(false)
  const [reading, setReading] = useState(false)

  const handelreading = (id) => {
    const post_list = document.querySelectorAll('.post-item .post-content p:nth-last-child(2)')
    
    post_list.forEach((post) => {
      if(post.id === id){
        console.log(post)
      }
    })
  }

  const likepost = (id) => {
    setLiked(!liked)
    
    const updatedPost = data.map((post) => {
      if(post.id === id){
        return {...post, likes: post.likes+1}
      }
      return post
    })

    setData(updatedPost)
  } 

  const unlikepost = (id) => {
    setLiked(!liked)
    const updatedPost = data.map((post) => {
      if(post.id === id){
        return {...post, likes:post.likes-1}
      }
      return post
    })
    setData(updatedPost)
  }

  return(
    <section id='post'>
      <h2>It's Trending</h2>
      {data.map((item) => {
        return(
          <div className="post-item" key={item.id}>
            <div className='post-name'>
              {item.user.slice(0, 1).toUpperCase()}
            </div>
            <div className="post-content">
                <h2>{item.title}</h2>
                <p>Category : {item.category}</p>
                <p>{reading ? item.content : item.content.slice(0, 200)} 
                  <button onClick={() => handelreading(item.id)}>Read More .....</button>
                </p>
                <p id='like'>
                  {liked ? <BiSolidLike onClick={() => unlikepost(item.id)}/> : <BiLike onClick={() => likepost(item.id)}/>}
                  {item.likes}  
                  <FaEye />
                  {item.views}
                </p>
            </div>
          </div>
        )
      })}
    </section>  
  )
}

export default Community
