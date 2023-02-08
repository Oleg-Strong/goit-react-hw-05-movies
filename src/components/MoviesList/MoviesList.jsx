import { useLocation } from 'react-router-dom';
import { checkImg } from '../utils/checkImg';
import { List, Item, Photo, FilmLink, FilmTitle } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, url }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <FilmLink to={`${url}${id}`} state={{ from: location }}>
            <Photo
              src={checkImg(poster_path)}
              alt={title}
              width="250px"
              height="350px"
            />
            <FilmTitle>{title}</FilmTitle>
          </FilmLink>
        </Item>
      ))}
    </List>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
};
