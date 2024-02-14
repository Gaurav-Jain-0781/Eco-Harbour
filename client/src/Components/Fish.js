import React, {useState, useEffect} from 'react'

const Fish = ({search}) => {
    const [fishes, setFishes] = useState(Array.isArray(search) ? search : [])
    
    useEffect(() => {
      setFishes(search ?? [])
    }, [search])

  return (
    <div>
      {fishes.map((fish) => {
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
