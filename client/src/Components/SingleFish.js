import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaShip } from 'react-icons/fa'
import Spinner from './Spinner'
import axios from 'axios'
import { PreferedFish } from './Data' 
import Fish from './Fish'

const SingleFish = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [fish, setFish] = useState({})

    useEffect(() => {
        const getFish = async() => {
            try{
                const { data } = await axios.get(`/fish/${id}`) 
                console.log(data)
                setFish(data)

            } catch (error){
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getFish()
    }, [id])

    if(loading){
        return <Spinner/>
    }

  return (
    <>
        <section id="harbour-details">
          <div className="harbour-image">
              <img src={fish.image_url} alt="harbour"/>
          </div>
          <div className="harbour-des">
              <h3>{fish.local_name}</h3>
              <h6>Category : {fish.category}</h6>
              <p>Scientific Name : {fish.scientific_name}</p>
              <p>Catch Limit : {fish.catch_limit}</p>
              <p>Seasonal Availability : {fish.seasonal_availability}</p>
              <span>{fish.description}</span>
              <button className='btn'>Sail <FaShip/></button>
          </div>
      </section>
    </>
  )
}

export const PreferedFishes = () => {
    return (
        <section id='servicepage'>
            <section id='product'>
                <h2>Famous Fishes </h2>
                <div className='product_container'>
                    {PreferedFish.map((fish) => {
                    return <Fish key={fish.id} fish={fish}/>
                    })}
                </div>
            </section>
        </section>
    )
}

export default SingleFish
