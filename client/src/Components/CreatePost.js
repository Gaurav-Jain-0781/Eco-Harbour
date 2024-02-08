import React from 'react'

const CreatePost = () => {
  return (
    <div>
      <form class="forum-form">
        <label for="insights">Enter your insights:</label>
        <textarea id="insights" name="insights" rows="4" cols="50"></textarea>
        <button className='btn' type="submit">Post</button>
      </form>
    </div>
  )
}

export default CreatePost
