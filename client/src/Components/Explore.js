import React from 'react'
import { harbours, Services } from './Data'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <section id='harbour'>
        <h1>Let's Explore</h1>
        <div className='coast'>
        {
            harbours.map((harbour) => {
                return (
                    <div className="card">
                        <img src={harbour.url} alt={harbour.name}/>
                        <div>
                            <h2>{harbour.name}</h2>
                            <p>No. of Harbours:{harbour.no_of_harbours}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </section>
  )
}

export const Perks = () => {
  return (
    <section id='services'>
        <h1>Services We Gladly Offer</h1>
        <div id='service'>
        {
            Services.map((service) => {
                return (
                    <div class="service-card">
                        <Link to={service.link}>
                            <p>{service.name} {service.icon}</p>
                        </Link>
                    </div>
                )
            })
        }
        </div>
    </section>
  )
}

export default Explore
