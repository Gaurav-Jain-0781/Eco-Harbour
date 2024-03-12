import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import Rating from './Rating';
import { PreferedHarbour } from './Data'
import Harbours from './Harbour';
import { FaShip } from 'react-icons/fa';

import '../Styles/harbour.css'
import '../Styles/service.css'

const SingleHarbour = () => {
  const { id } = useParams()
  const [harbour, setHarbour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHarbour = async () => {
      try {
        const { data } = await axios.get(`/harbour/${id}`);
        console.log(data)
        setHarbour(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    };

    getHarbour();
  }, [id]);

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
              <span>{harbour.description}</span>
              <button className='btn'>Sail <FaShip/></button>
          </div>
      </section>
    </>
  )
}

export const PreferedHarbours = () =>{
  return (
    <>
      <section id='product'>
          <h2>Famous Harbours </h2>
          <div className='product_container'>
            {PreferedHarbour.map((harbour) => {
              return <Harbours key={harbour.id} harbour={harbour}/>
            })}
          </div>
      </section>
    </>
  )
}  

export default SingleHarbour
