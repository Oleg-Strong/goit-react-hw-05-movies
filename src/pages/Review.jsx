import React, { useState, useEffect, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieInfo } from 'components/utils/api-servises';
import MovieCard from 'components/MovieCard';
import BackBtn from 'components/BackBtn';
import Navigate from 'components/Navigate';
import Loader from 'components/Loader';
import Scroll from 'components/Scroll';
import Warning from 'components/Warning';

const Review = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const location = useRef(useLocation());
  const backLinkUrl = location.current.state?.from ?? '/movies';

  useEffect(() => {
    setIsLoad(true);
    const controllerMovieInfo = new AbortController();
    const signal = controllerMovieInfo.signal;
    getMovieInfo(id, signal)
      .then(({ data }) => {
        setMovie(data);
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
      controllerMovieInfo.abort();
    };
  }, [id]);

  return (
    <main>
      <BackBtn to={backLinkUrl}>BACK</BackBtn>
      {isLoad ? (
        <Loader />
      ) : movie.length === 0 ? (
        <Warning>We don't have any information about this movie</Warning>
      ) : (
        <>
          <MovieCard movie={movie} />
          <Navigate />
          <Outlet />
        </>
      )}
      <Scroll />
    </main>
  );
};

export default Review;
