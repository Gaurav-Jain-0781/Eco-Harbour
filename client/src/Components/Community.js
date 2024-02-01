import React, { useState } from 'react'
import { forum } from './Data'

const Community = () => {
  const [data, setData] = useState(forum)
  
  return (
    <section id='community'>
      <div>
        {data.map((article) => {
          return (
            <div>
              <img src={article.image} />
            </div>
          )}
        )}
      </div>
    </section>
  )
}

export default Community
