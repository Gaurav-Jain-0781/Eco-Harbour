import React, { useState, useEffect } from 'react'
import { MdExplore } from 'react-icons/md';

const Harbours = ({harbour}) => {
    // const [harbours, setHarbours] = useState(search)

    // useEffect(() => {
    //     setHarbours(search ?? [])
    // }, [search])

  return (
    <div className="pro" key={harbour.id}>
      <img src={harbour.image} alt={harbour.name} />
      <div className='des'>
          <h5>{harbour.state}</h5>
          <p>Abundance : {harbour.abundance}</p>
          <p>Fish ID  : {harbour.fishId}</p>
          <button className='btn'>Explore <MdExplore/></button>
      </div>      
    </div>
  )
}

export default Harbours
