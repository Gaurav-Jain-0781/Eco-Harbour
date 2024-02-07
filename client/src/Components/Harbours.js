import React from 'react'
import { harbours } from './Data'

const Harbours = () => {
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

export default Harbours
