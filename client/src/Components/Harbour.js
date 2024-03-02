import React from 'react'
import { MdExplore } from 'react-icons/md';
import { FaShip } from 'react-icons/fa';

const Harbours = ({harbour}) => {
  return (
    <div className="pro" key={harbour.id}>
      <img src={harbour.image} alt={harbour.name} />
      <div className='des'>
          <h4>{harbour.name}</h4>
          <p>State : {harbour.location}</p>
          <div style={{width: '100%'}}>
            <button className='btn'>Sail <FaShip/></button>
            <button className='btn'>Explore <MdExplore/></button>
          </div>
      </div>      
    </div>
  )
}

export default Harbours
