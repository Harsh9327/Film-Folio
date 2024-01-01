import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Search = ({api}) => {
  const [ SearchParams ] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  const { data:movies } = useFetch(api, queryTerm);
  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-3">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
      <section className="mx-w-7px max-auto py-7">
        <div className="flex justify-center flex-wrap">
          { movies.map((movie) => (
             <Card  key={movie.id} movie={movie}/>  
          )) }
        </div>
      </section>
    </main>
  );
};
