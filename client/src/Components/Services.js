import React from 'react'
import { Services } from './Data'

const Harbour_Services = () => {
  return (
    <section id='services'>
        <h1>Services We Gladly Offer</h1>
        <div className='service'>
        {
            Services.map((service) => {
                return (
                    <div class="card">
                        {service.name}
                    </div>
                )
            })
        }
        </div>
    </section>
  )
}

export default Harbour_Services
