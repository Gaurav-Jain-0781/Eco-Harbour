import React from 'react'
import { Link } from 'react-router-dom'
import { Services } from './Data'

const Harbour_Services = () => {
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

export default Harbour_Services
