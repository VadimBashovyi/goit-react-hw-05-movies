import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom'

import defaultImage from '../../images/noImage.jpg'

import styles from './MovieCard.module.css'

export default function MovieCard({ movie }) {
  const { url } = useRouteMatch()
  const location = useLocation()
  return (
    <>
      <Link className={styles.goBackBtn} to={location?.state?.from ?? '/'}>
        Go back
      </Link>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{`${
            movie.title
          } (${movie.release_date.slice(0, 4)})`}</h3>
          <p className={styles.description}>
            <span className={styles.descriptionSpan}>Description:</span>
            {movie.overview}
          </p>
          <p className={styles.genresTitle}>Genres:</p>
          <ul className={styles.genresList}>
            {movie.genres.map(({ name }) => (
              <li key={name} className={styles.genresList__item}>
                <p>{name}</p>
              </li>
            ))}
          </ul>

          <NavLink
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from },
            }}
          >
            Cast
          </NavLink>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from },
            }}
          >
            Reviews
          </NavLink>
        </div>
      </div>
    </>
  )
}
