import React from 'react'

const CreatePost = () => {
  return (
    <div>
      <form class="post-form">
        <h2>Share your Insights</h2>
        <label>Title 
          <input id='title' name='title' type='text'/>
        </label>
        <label>Category 
          <input id='content' name='category' type='text'/>
        </label>
        <label>Content
          <textarea id="conetnt" name="content" rows="20" cols="50"></textarea>
        </label>
        <button className='btn' type="submit">Post</button>
      </form>
    </div>
  )
}

export default CreatePost
