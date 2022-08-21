import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import { TrendMoviesFetch } from '../../servises/Servises';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    TrendMoviesFetch().then(setMovies);
  }, []);

  return (
    <div className={css.container}>
      <h2>Trending today movies</h2>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link state={{ from: location.pathname }} to={`movies/${id}`}>
                {' '}
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
