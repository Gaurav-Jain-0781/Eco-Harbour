import React, { useEffect, useState } from 'react'
import Fish from './Fish'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const HarbourServices = () => {
  const [fishName, setFishName] = useState('')
  const [harbour, setHarbour] = useState('')
  const [search, setSearch] = useState([])
  const [error, setError] = useState(false)

  const handelSubmit = async (e) => {
    e.preventDefault()

    if(fishName){
      try {
        const { data } = await axios.get(`/fish/search/${fishName}`)
        setSearch(data)
      } catch(error) { 
        console.log("Error in Fish search")
      }
    }
    else if(harbour){
      try {
        const { data } = await axios.get(`/harbour/search/${harbour}`)
        setSearch(data)
      } catch (error) {
        console.log("Error in Harbour Search")
      }
    }
    else{
      setError(true)
    } 
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [error])

  return (
    <section id='servicepage'>
      <h2>Search </h2>
      <form onSubmit={handelSubmit}>
        <div style={{width : '40%'}}>
          <label>Fish : </label>
          <input type='text' id='fish-text' placeholder='Enter Fish' value={fishName} onChange={(e) => setFishName(e.target.value)}></input>
        </div>
        <div style={{width: '45%'}}>
          <label>Or Harbour : </label> 
          <input type='text' id='harbour-text' placeholder='Enter Harbour' value={harbour} onChange={(e) => setHarbour(e.target.value)} style={{width : '60%'}}></input>
        </div>
        <div style={{width: '15%'}}>
          <button className='btn' type='submit'><FaSearch/>Search</button>
        </div>
      </form>    
      {error && <span id='error'>Please Fill in one of the Field</span>}
      {search && <Fish search={search}/>}

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
