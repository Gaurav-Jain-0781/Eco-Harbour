import React, { useState } from 'react'
import Fish from './Fish'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const HarbourServices = () => {
  const [singleFish, setSingleFish] = useState('')
  const [search, setSearch] = useState([])

  const handelChange = (e) => {
    setSingleFish(e.target.value)
  }

  const handelSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.get(`/fish/search/${singleFish}`)
      setSearch(data)
    }
    catch(error) { 
      console.log("Error in Fish search")
    }
  }

  return (
    <section id='service'>
      <h2>Search </h2>
      <form onSubmit={handelSubmit}>
        <div style={{width : '40%'}}>
          <label>Fish : </label>
          <input type='text' placeholder='Enter Fish' value={singleFish} onChange={handelChange}></input>
        </div>
        <div style={{width: '45%'}}>
          <label>Or Harbour : </label> 
          <input type='text'></input>
        </div>
        <div style={{width: '15%'}}>
          <button className='btn' type='submit'><FaSearch/>Search</button>
        </div>
      </form>    

      {search && <Fish details={search}/>}

    </section>
  )
}

export const ServiceHeader = () => {
    return (
        <section id='landing'>
            <img src="/images/service.png" alt='service-page'/>
            <div>
                <h2>Welcome Onbaord</h2>
                <p>We aim to Provide Value to our Users</p>
            </div>
        </section>
    )
}

export default HarbourServices
