import React, { useState } from 'react'
import { forum } from './Data'

const Community = () => {
  const [data, setData] = useState(forum)
  
  return (
    <section id='community'>
      <div class="head">
            <img src="/images/forum.png"/>
            <h2>Let's start a new community ! </h2>
            <button>Join Now</button>
      </div>
    </section>
  )
}

export default Community
