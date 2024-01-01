import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import {useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({api, title}) => {
 const { data: movies } = useFetch(api);
   //eslint-disable-next-line
 const pageTitle = useTitle(title);

 useEffect(() => {
  document.title = `${title} / Film Folio`;
});


  return (
    <main>
      <section className="mx-w-7px max-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">
          { movies.map((movie) => (
             <Card  key={movie.id} movie={movie}/>  
          )) }
        
        </div>
      </section>
    </main>
  )
}
