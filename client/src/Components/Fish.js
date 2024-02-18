import React from 'react'
import { MdExplore } from 'react-icons/md'
import { FaShip } from 'react-icons/fa';

const Fish = ({fish}) => {
  if(!fish){
    return null;
  }

  return (
    <div className="pro" key={fish.id}>
      <img src={fish.image_url} alt={fish.name} />
      <div className='des'>
        <h4>{fish.local_name.toUpperCase()}</h4>
        <p>Category : {fish.category.toUpperCase()}</p>
        <div style={{width: '100%'}}>
          <button className='btn'>Sail <FaShip/></button>
          <button className='btn'>Explore <MdExplore/></button>
        </div>
      </div>      
    </div>
  )
}

export default Fish
