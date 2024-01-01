import { Link } from 'react-router-dom';
import { Button } from '../components';
import PagenotFound from '../Assets/pagenotefound750.jpg';
import { useEffect } from 'react';

export const PageNotFound = () => {

  useEffect(()=> {
    document.title = `page not found /Film Folio`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-2">
          <p className="text-5xl text-gray-700 font-bold my-4 dark:text-white"> 404, Oops!</p>
          <div className="max-w-xs">
          <img className="rounded" src={PagenotFound} alt="404 page note found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
