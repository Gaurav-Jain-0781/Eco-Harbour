import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'
import { FaShip } from 'react-icons/fa';
import { toast } from 'react-toastify'

const Fish = ({fish}) => {
  const [ latitude, setLatitude ] = useState()
  const [ longitude, setLongitude ] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const getCordinates = () => {
      if(navigator.geolocation) {
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
        console.log("Navigator geolocation not Supported")
      }
    }

    getCordinates()
  }, [])

  const markSail = async () => {
    try{
      const { data } = await axios.get('/user/profile')
      if( data._id){
        const user_id = data._id
        try{
          const response = await axios.post('/record/', {
            user_id, 
            longitude, 
            latitude
          })
          toast.success("Sail Marked")
        } catch (error) {
          console.log(error)
        }
      }
      else{
        toast.warning("Please Login Before Sail")
        navigate('/login')
      }
    } catch (error) {
      if(error.response.data.message === "Unauthorized User, No Token"){
        toast.warning("Please Login Before Sail")
        navigate('/login')
      }
      if(error.response.data.message === "Error in Sail"){
        toast.error("Error in Sail")
      }
      else{
        console.log(error)
      }
    }
  }

  if(!fish){
    return null;
  }

  return (
    <div className="pro" key={fish._id}>
      <img src={fish.image_url} alt={fish.name} />
      <div className='des'>
        <h4>{fish.local_name.toUpperCase()}</h4>
        <p>Category : {fish.category.toUpperCase()}</p>
        <div style={{width: '100%'}}>
          <button className='btn' onClick={markSail}>Sail <FaShip/></button>
          <button className='btn'>
            <Link to={`/single-fish/${fish._id}`}>
              Explore <MdExplore/>
            </Link>
          </button>
        </div>
      </div>      
    </div>
  )
}

export default Fish
