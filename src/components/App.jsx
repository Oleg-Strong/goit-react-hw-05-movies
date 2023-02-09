import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import Review from 'pages/Review';
// import MovieCast from './MovieCast';
// import MovieReview from './MovieReview/MovieReview';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Review = lazy(() => import('pages/Review'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));

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
