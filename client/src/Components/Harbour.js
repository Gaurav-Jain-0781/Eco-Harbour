import React from 'react'
import { MdExplore } from 'react-icons/md';
import { FaShip } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Harbours = ({harbour}) => {
  return (
    <div className="pro" key={harbour._id}>
      <img src={harbour.image} alt={harbour.name} />
      <div className='des'>
          <h4>{harbour.name}</h4>
          <p>State : {harbour.location}</p>
          <div style={{width: '100%'}}>
            <button className='btn'>Sail <FaShip/></button>
            <button className='btn'>
              <Link to={`/single-harbour/${harbour._id}`}>
                Explore <MdExplore/>
              </Link>
            </button>
          </div>
      </div>      
    </div>
  )
}

export default Harbours
