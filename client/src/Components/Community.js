import React, { useState } from 'react'
import { forum } from './Data'
import { Link } from 'react-router-dom'

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
  return(
    <section id='post'>
      {data.map((item) => {
        return(
          <div className="post-item" key={item.user_id}>
            <div className='post-name'>
              {item.user_name.slice(0, 1).toUpperCase()}
            </div>
            <div className="post-content">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </div>
          </div>
        )
      })}
    </section>  
  )
}

export default Community
