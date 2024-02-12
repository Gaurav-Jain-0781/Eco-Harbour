import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Fish = ({details}) => {
    const [fishes, setFishes] = useState(Array.isArray(details) ? details : [])
    console.log(fishes);

    // useEffect(() => {
    //     const fetchfishes = async () => {
    //         const {data} = await axios.get('/fish');
    //         setFishes(data);
    //     };
    //     fetchfishes() ;
    // }, []);

  return (
    <div>
      {fishes.map((fish) => {
        console.log(fish)
        return (
            <div key={fish.id}>
                <p>{fish.local_name}</p>
                <p>{fish.scientific_name}</p>
                <p>{fish.catch_limit}</p>
            </div>
        )}
      )}
    </div>
  )
}

export default Fish
