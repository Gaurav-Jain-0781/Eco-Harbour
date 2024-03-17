import React from 'react'
import { FaStar, } from 'react-icons/fa'

const Rating = ({rating}) => {
  return (
    <>
      {rating >= 1 && <FaStar style={{color: 'gold'}}/>}
      {rating >= 2 && <FaStar style={{color: 'gold'}}/>}
      {rating >= 3 && <FaStar style={{color: 'gold'}}/>}
      {rating >= 4 && <FaStar style={{color: 'gold'}}/>}
      {rating >= 5 && <FaStar style={{color: 'gold'}}/>}
    </>
  )
}

export default Rating
