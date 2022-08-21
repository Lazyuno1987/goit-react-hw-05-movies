import { MovieDetalisFetch } from '../../servises/Servises';
import {
  Outlet,
  useParams,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './MoviesDetalis.module.css';

export default function MoviesDetalis() {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
    const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    MovieDetalisFetch(movieId).then(setMovieInfo);
  }, [movieId]);
  const { genres, overview, title, vote_average, release_date, poster_path } =
    movieInfo;
  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </button>
      <div className={css.card}>
        <img
          width={200}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
        <div className={css.right}>
          <h2>{title}</h2>
          <p>
            <b>Overview: </b> {overview}
          </p>
          <p>
            <b>User score:</b> {vote_average * 10}%
          </p>
          <p>
            <b>Release date:</b> {release_date}
          </p>

          {genres && (
            <div className={css.genres}>
              <b>Genres:</b>{' '}
              {genres.map(({ id, name }) => (
                <p className={css.text} key={id}>
                  {name}
                </p>
              ))}{' '}
            </div>
          )}
        </div>
      </div>
      <hr />
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
