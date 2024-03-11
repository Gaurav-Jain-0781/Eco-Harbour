import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from './Rating'
import Spinner from './Spinner'
import axios from 'axios'

const SingleFish = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [fish, setFish] = useState({})

    useEffect(() => {
        const getFish = async() => {
            setLoading(true)
            try{
                const { data } = await axios.get(`/fish/${id}`) 
                console.log(data)
            } catch (error){
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getFish()
    }, [fish])

    if(loading){
        return <Spinner/>
    }

  return (
    <div>
        
    </div>
  )
}

export default SingleFish
