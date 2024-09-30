import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';

import { lazy, Suspense } from 'react';

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));




const App = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
          </Route >
        
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
</Suspense>

      
    </div>
  )
}

export default App
