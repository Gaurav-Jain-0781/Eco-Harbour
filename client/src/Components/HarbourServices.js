import React, { useEffect, useState } from 'react'
import Fish from './Fish'
import Harbour from './Harbour'
import Spinner from './Spinner'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const HarbourServices = () => {
  const [fishName, setFishName] = useState('')
  const [harbourName, setHarbourName] = useState('')
  const [searchFish, setSearchFish] = useState([])
  const [searchHarbour, setSearchHarbour] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fishSearch = async () => {
    setSearchFish([])
    setSearchHarbour([])
    setLoading(true)
    
    try {
      const { data } = await axios.get(`/fish/search/${fishName}`)
      const fishId = data[0]._id;

      try {
        const { data } = await axios.get(`/abundance/fish/${fishId}`);

        const highAbundance = data.filter((item) => item.abundance === "high")
        const mediumAbundance = data.filter((item) =>  item.abundance === "medium")
        const lowAbundance = data.filter((item) => item.abundance === "low")
        
        const states = []
        
        highAbundance.map((item) => states.push(item.state))
        mediumAbundance.map((item) => states.push(item.state))
        lowAbundance.map((item) => states.push(item.state))

        const harbour_records = states.map(async (state) => {
          try {
            const { data } = await axios.get(`/harbour/state/${state}`)
            return data
          } catch (error) {
            console.log("Error in Harbour Search")
          }
        })
        
        const harboursArrays = await Promise.all(harbour_records);
        const harbours = [].concat(...harboursArrays);
        
        setSearchFish(harbours)

      } catch (error) {
        console.log("Error in Abundance Search ") 
      }
      
    } catch(error) { 
      console.log("Error in Fish search")
    } finally {
      setLoading(false)
    }
  }

  const harbourSearch = async () => {
    setSearchFish([])
    setSearchHarbour([])
    setLoading(true)

    try {
      const { data: harbour} = await axios.get(`/harbour/search/${harbourName}`)
      const state = harbour[0].location;

      try {
        const { data } = await axios.get(`/abundance/state/${state}`)

        const mediumAbundance = data.filter((item) => item.abundance === 'medium ').slice(0, 5);
        const highAbundance = data.filter((item) =>  item.abundance === 'high').slice(0, 5);
        const lowAbundance = data.filter((item) =>  item.abundance === 'low').slice(0, 5);

        const fishIds = []

        mediumAbundance.forEach((element) => {
          fishIds.push(element.fishId)
        });

        lowAbundance.forEach((element) => {
          fishIds.push(element.fishId)
        });

        highAbundance.forEach((element) => {
          fishIds.push(element.fishId)
        });        

        const promises = fishIds.map(async (id) => {
          try {
            const { data } = await axios.get(`/fish/${id}`)
            return data;

          } catch (error) {
            console.log("Error in Fish Search",error)
          }
        })

        const fishObjects = await Promise.all(promises);
        
        setSearchHarbour(fishObjects);

      } catch (error) {
        console.log("Error in Abundance Search")
      }

    } catch(error) { 
      console.log("Error in Harbour search")
    } finally {
      setLoading(false)
    }
  }

  const handelSubmit = (e) => {
    e.preventDefault()

    if(fishName){
      fishSearch()
    }
    else if(harbourName){
      harbourSearch()
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
          <label><span style={{marginRight : '25px'}}> Or </span> Harbour : </label> 
          <input type='text' id='harbour-text' placeholder='Enter Harbour' value={harbourName} onChange={(e) => setHarbourName(e.target.value)} style={{width : '60%'}}></input>
        </div>
        <div style={{width: '15%'}}>
          <button className='btn' type='submit'><FaSearch/>Search</button>
        </div>
      </form>   

      {error && <span id='error'>Please Fill in one of the Field</span>}
    
      {loading && <Spinner/>}

      {(searchFish.length > 0) && (
        <section id='product'>
          <h2>Prefered Harbours </h2>
          <div className='product_container'>
            {searchFish.map((harbour) => {
              return <Harbour key={harbour._id} harbour={harbour}/>
            })}
          </div>
        </section>
      )}

      {(searchHarbour.length > 0) && (
        <section id='product'>
          <h2>Prefered Fishes </h2>
          <div className='product_container'>
            {searchHarbour.map((fish) => {
              return <Fish key={fish._id} fish={fish}/>
            })}
          </div>
        </section>
      )}

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
