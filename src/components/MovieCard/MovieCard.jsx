import PropTypes from 'prop-types';
import { checkImg } from 'components/utils/checkImg';
import {
  Card,
  Picture,
  MovieTitle,
  CategoryTitle,
  Score,
  CategoryText,
} from './MovieCard.styied';

const MovieCard = ({
  movie: { poster_path, title, overview, genres, vote_average },
}) => {
  const userScore = `${Math.round(vote_average * 10)}%`;
  const filmGenres = genres
    ? genres.map(({ name }) => name).join(',')
    : 'no information about genres';
  const filmOverview = overview ? overview : 'no overview for this movie';

  return (
    <Card>
      <div>
        <Picture
          src={checkImg(poster_path)}
          alt={title}
          width="340px"
          height="500px"
        />
      </div>
      <div>
        <MovieTitle>{title}</MovieTitle>

        <CategoryTitle>Overview:</CategoryTitle>
        <CategoryText>{filmOverview}</CategoryText>
        <CategoryTitle>Ganres: </CategoryTitle>
        <CategoryText>{filmGenres}</CategoryText>
        <CategoryTitle>
          User Score: <Score score={userScore}>{userScore}</Score>
        </CategoryTitle>
      </div>
    </Card>
  );
};
export default MovieCard;
MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};
