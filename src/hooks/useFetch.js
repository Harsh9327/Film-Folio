import { useState, useEffect } from "react"

export const useFetch = (api, queryTerm="") => {
    const [data, setData] =useState([]);
    const url =`https://api.themoviedb.org/3/${api}?api_key=74a9584e2a13b12369abf448eddda20a&query=${queryTerm}`

    useEffect(() => {
        async function fatchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fatchMovies();
      },[url])


  return { data }
}
