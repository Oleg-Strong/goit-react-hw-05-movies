import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Layout from './Layout';
import Movies from 'pages/Movies';
import Review from 'pages/Review';
import MovieCast from './MovieCast';
import MovieReview from './MovieReview/MovieReview';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<Review />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
