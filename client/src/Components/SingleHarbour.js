import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PreferedHarbour } from './Data'
import { FaShip, FaFileUpload } from 'react-icons/fa';
import { toast } from 'react-toastify'
import Harbours from './Harbour';
import axios from 'axios';
import Spinner from './Spinner';
import Rating from './Rating';

import '../Styles/harbour.css'
import '../Styles/service.css'

const SingleHarbour = () => {
  const { id } = useParams()
  const [harbour, setHarbour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [sail, setSail] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const getHarbour = async () => {
      try {
        const { data } = await axios.get(`/harbour/${id}`);
        setHarbour(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    };

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

    getHarbour();
    getCordinates()
  }, [id]);

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
          setSail(true)
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

  if(loading){
    return <Spinner/>
  }

  return (
    <>
      <section id="harbour-details">
          <div className="harbour-image">
              <img src={harbour.image} alt="harbour"/>
          </div>
          <div className="harbour-des">
              <h3>{harbour.name}</h3>
              <h6>State : {harbour.location}</h6>
              <p>District : {harbour.district}</p>
              <p>Rating : <Rating rating={harbour.rating}/></p>
              <span>{harbour.description}</span><br/>
              {sail || <button className='btn' onClick={markSail}> Mark Sail <FaShip/></button> }
              {sail && <button className='btn'><Link to={'/dashboard'}>Upload Proof <FaFileUpload/></Link></button>}
          </div>
      </section>
    </>
  )
}

export const PreferedHarbours = () =>{
  return (
    <section id='servicepage'>
      <section id='product'>
          <h2>Famous Harbours </h2>
          <div className='product_container'>
            {PreferedHarbour.map((harbour) => {
              return <Harbours key={harbour._id} harbour={harbour}/>
            })}
          </div>
      </section>
    </section>
  )
}  

export default SingleHarbour
