import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import { FaShip } from 'react-icons/fa';

import '../Styles/harbour.css'

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
        setLoading(false)
      } catch (error) {
        console.log(error.message);
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
              <p>Rating : </p>
              <span>{harbour.description}</span>
              <button className='btn'>Sail <FaShip/></button>
          </div>
      </section>
    </>
  )
}

export default SingleHarbour
