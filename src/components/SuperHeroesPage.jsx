import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

//Default Fetching


function SuperHeroesPage() {
    const [isLoading,setIsLoading]=useState(true)
    const [data,setData]=useState([])
    const [error,setError]=useState('')

        useEffect(() => {
        axios.get(' http://localhost:4000/superheroes').then((res)=>{
            setData(res.data)
            setIsLoading(false)
            console.log(res);
        }).catch(error=>{
          setError(error.message)
          setIsLoading(false)

        })
        }, [])
        if (isLoading) {
            return <h2>Loading</h2>
        }
        if (error) {
          return <h2>{error}</h2>
      }
        
        
  return (
    <div>
      {data.map((hero) => {
        return (
          <div key={hero.id}>
            <h1>{hero.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default SuperHeroesPage