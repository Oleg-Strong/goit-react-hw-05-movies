import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/utils/api-servises';
import Loader from 'components/Loader';
import Warning from 'components/Warning';
import notify from '../utils/alert';
import { List, Author, AuthorName, AuthorText } from './MovieReview.styled';

const MovieReview = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    const controllerMovieReviews = new AbortController();
    const signal = controllerMovieReviews.signal;
    setIsLoad(true);
    getMovieReviews(id, signal)
      .then(({ results }) => {
        setReviews(results);
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
      controllerMovieReviews.abort();
    };
  }, [id]);

  return isLoad ? (
    <Loader />
  ) : reviews.length === 0 ? (
    <Warning>We don't have any reviews for this movie.</Warning>
  ) : (
    <List>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <Author>
            Author : <AuthorName>{author}</AuthorName>
          </Author>
          <AuthorText>{content}</AuthorText>
        </li>
      ))}
    </List>
  );
};
export default MovieReview;
