import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/utils/api-servises';
import { checkImg } from 'components/utils/checkImg';
import Loader from 'components/Loader';
import Warning from 'components/Warning';
import notify from 'components/utils/alert';
import checkCasts from 'components/utils/checkCast';
import { List, Item, Photo, Rol } from './MovieCast.styled';

const MovieCast = () => {
  const { id } = useParams();
  const idToNumber = Number(id);
  const [casts, setCasts] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const controllerMovieCast = new AbortController();
    const signal = controllerMovieCast.signal;

    setIsLoad(true);
    getMovieCast(idToNumber, signal)
      .then(({ cast }) => {
        const filteredCasts = checkCasts(cast);
        setCasts(filteredCasts);
      })
      .catch(error => {
        if (error.response) {
          notify('error');
          console.log(error.response.data.status_message);
        } else if (error.request) {
          console.log(error.name);
        }
      })
      .finally(() => {
        setIsLoad(false);
      });
    return () => {
      controllerMovieCast.abort();
    };
  }, [idToNumber]);

  return isLoad ? (
    <Loader />
  ) : casts === 0 ? (
    <Warning>We don't have any casts for this movie.</Warning>
  ) : (
    <List>
      {casts.map(({ cast_id, name, profile_path, character }) => (
        <Item key={cast_id}>
          <Photo
            src={checkImg(profile_path)}
            alt={name}
            width="250px"
            height="300px"
          />
          <Rol>
            {name} as {character}
          </Rol>
        </Item>
      ))}
    </List>
  );
};
export default MovieCast;
