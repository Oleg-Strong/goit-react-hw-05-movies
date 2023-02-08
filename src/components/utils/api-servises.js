import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';

export const getPopularMovies = async signal => {
  return await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`, {
    signal: signal,
  });
};

export const getMovieInfo = async (id, signal) => {
  return await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`,
    {
      signal: signal,
    }
  );
};

export const getMovieCast = async (id, signal) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    {
      signal: signal,
    }
  );
  return response.data;
};

export const getMovieReviews = async (id, signal) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    {
      signal: signal,
    }
  );
  return response.data;
};

export const getMovieByName = async (query, signal) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    {
      signal: signal,
    }
  );
  return response.data;
};
