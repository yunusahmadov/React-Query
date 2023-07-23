import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'



//Fetching by using ReactQuery
const fetchHeroes=()=>{
  return axios.get("http://localhost:4000/superheroes");
}
function RQSuperHeroesPage() {

  const { isLoading, data,isError,error} = useQuery("super-heroes",fetchHeroes);
  //Обработка Ошибки
  if (isError) {
    return <h2>{error.message}</h2>
}

  return (

    <>
      {
        isLoading? <h2>Loading...</h2>:
        <div>
        <h2>RQSuperHeroesPage</h2>
        {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      </div>
      }
    </>

  );
}

export default RQSuperHeroesPage;