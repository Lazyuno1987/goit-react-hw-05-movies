import { Route, Routes } from 'react-router-dom';

import { Cast } from './views/Cast/Cast';
import Navigation from './Navigation/Navigation';
import { lazy, Suspense } from 'react';
import { Reviews } from './views/Reviews';
import { NotFoundView } from './views/NotFoundView';

const MoviesDetalis = lazy(() =>
  import('./views/MoviesDetalis/MoviesDetalis.jsx')
);
const Home = lazy(() => import('./views/Home/Home.jsx'));
const Movies = lazy(()=>import('./views/Movies/Movies.jsx'))
export const App = () => {
  return (
    <>
       <Suspense fallback={''}>
      <Navigation />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetalis />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </>
  );
};
