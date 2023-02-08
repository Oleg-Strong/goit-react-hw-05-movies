import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'components/utils/api-servises';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import SectionTitle from 'components/Title/Title';
import notify from 'components/utils/alert';
import Loader from 'components/Loader';
import Scroll from 'components/Scroll';
import { ToastContainer } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const paramName = searchParams.get('query') ?? '';
  const updateQueryString = query => setSearchParams({ query });

  useEffect(() => {
    const controllerMovieByName = new AbortController();
    const signal = controllerMovieByName.signal;
    if (paramName === '') {
      setMovies([]);
      return;
    }
    setIsLoad(true);
    getMovieByName(paramName, signal)
      .then(({ results }) => {
        if (results.length === 0) {
          setMovies([]);
          return notify('warning');
        }
        setMovies(results);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data.status_message);
          notify('error');
        } else if (error.request) {
          console.log(error.name);
        }
      })
      .finally(() => {
        setIsLoad(false);
      });
    return () => {
      controllerMovieByName.abort();
    };
  }, [paramName]);
  return (
    <main>
      <SectionTitle>Find a movie</SectionTitle>
      <SearchForm onSubmit={updateQueryString} />
      {isLoad ? <Loader /> : <MoviesList movies={movies} url="" />}
      <Scroll />
      <ToastContainer />
    </main>
  );
};

export default Movies;
