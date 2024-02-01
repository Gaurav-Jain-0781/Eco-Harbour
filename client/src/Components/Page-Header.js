import React from 'react'
import image from '../images/forum.jpg'

const PageHeader = () => {
  return (
    <section id='page-header' style={{backgroundImage: `url(${image})`}}>
      <h2>Harvesting Hope, Preserving Seas</h2>
      <p>Our Tracker, Your Sustainable Companion</p>
    </section>
  )
}

export default PageHeader
