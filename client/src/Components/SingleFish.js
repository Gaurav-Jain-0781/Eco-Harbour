import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaShip, FaFileUpload } from 'react-icons/fa'
import { PreferedFish } from './Data' 
import Spinner from './Spinner'
import axios from 'axios'
import Fish from './Fish'
import { toast } from 'react-toastify'

const SingleFish = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [fish, setFish] = useState({})
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [sail, setSail] = useState(false)

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

        const getCordinates = () => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLatitude(position.coords.latitude)
                        setLongitude(position.coords.longitude)
                    }, 
                    (error) => {
                        console.log(error)
                    }
                )
            }
            else{
                console.log("Navigator Geolocation Error")
            }
        }

        getFish()
        getCordinates()
    }, [id])

    const markSail = async() => {
        try{
            const { data } = await axios.get('/user/profile')
            if(data._id) {
                const user_id = data._id
                const search = fish.local_name
                try {
                    const response = await axios.post('/record/', {
                        user_id, 
                        search,
                        longitude, 
                        latitude
                    })
                    setSail(true)
                    toast.success("Sail Marked")
                } catch (error) {
                    console.log(error)
                }
            }
            else{
                toast.warning("Please Login Before Sail")
            }
        } catch (error) {
            if(error.response.data.message === "Error in Sail"){
                toast.error("Error in Sail")
            }
            else{
                console.log(error)
            }
        }
    }


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
              {sail || <button className='btn' onClick={markSail}> Mark Sail <FaShip/></button> }
              {sail && <button className='btn'><Link to={'/dashboard'}>Upload Proof <FaFileUpload/></Link></button>}
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
