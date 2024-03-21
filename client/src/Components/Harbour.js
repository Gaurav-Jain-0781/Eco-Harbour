import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdExplore } from 'react-icons/md';
import { FaShip } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'

const Harbours = ({harbour}) => {
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
        const search = harbour.name
        try{
          const response = await axios.post('/record/', {
            user_id, 
            search,
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

  if(!harbour){
    return null;
  }

  return (
    <div className="pro" key={harbour._id}>
      <img src={harbour.image} alt={harbour.name} />
      <div className='des'>
          <h4>{harbour.name}</h4>
          <p>State : {harbour.location}</p>
          <div style={{width: '100%'}}>
            <button className='btn' onClick={markSail}>Sail <FaShip/></button>
            <button className='btn'>
              <Link to={`/single-harbour/${harbour._id}`}>
                Explore <MdExplore/>
              </Link>
            </button>
          </div>
      </div>      
    </div>
  )
}

export default Harbours
