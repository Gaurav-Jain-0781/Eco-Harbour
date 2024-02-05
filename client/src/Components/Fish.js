import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Fish = () => {
    const [fishes, setFishes] = useState([])

    useEffect(() => {
        const fetchfishes = async () => {
            const {data} = await axios.get('/fish');
            setFishes(data);
        };
        fetchfishes() ;
    }, []);

  return (
    <div>
      {fishes.map((fish) => {
        return (
            <div>
                <p>{fish["Local Name"]}</p>
                <p>{fish["Scientific Name"]}</p>
                <p>{fish.catch_limit}</p>
            </div>
        )}
      )}
    </div>
  )
}

export default Fish
