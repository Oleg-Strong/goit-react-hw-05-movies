import React, { useState, useEffect } from 'react';
import { getPopularMovies } from 'components/utils/api-servises';
import MoviesList from 'components/MoviesList';
import SectionTitle from 'components/Title/Title';
import Loader from 'components/Loader';
import Scroll from 'components/Scroll';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const controllerPopularMovies = new AbortController();
    const signal = controllerPopularMovies.signal;
    setIsLoad(true);
    getPopularMovies(signal)
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data.status_message);
        } else if (error.request) {
          console.log(error.name);
        }
      })
      .finally(() => {
        setIsLoad(false);
      });
    return () => {
      controllerPopularMovies.abort();
    };
  }, []);

  return (
    <main>
      <SectionTitle>Popular movies for today</SectionTitle>
      {isLoad ? <Loader /> : <MoviesList movies={movies} url="movies/" />}
      <Scroll />
    </main>
  );
};

export default Home;
