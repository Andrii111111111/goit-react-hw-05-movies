import { useEffect, useState } from 'react';
import { getSingleFilm } from '../GetFilms/Get';
import { Link, Outlet, useParams } from 'react-router-dom';
import FilmInfo from '../FilmInfo/FilmInfo';
import { Wraper, Button } from './Movie.styled';

const MovieDetails = () => {
  const moveId = useParams();
  const id = moveId.movieId;
  const [fetchedFilm, setFetchedFilm] = useState([]);
  const {
    poster_path,
    title,
    vote_average,
    overview,
    genres = [],
  } = fetchedFilm;

  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async () => {
        const data = await getSingleFilm(id);

        setFetchedFilm(data);
      };
      fetchFilm();
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  }, [id]);

  return (
    <>
      <>
        <Link to={'/'}>
          <Button> Go back</Button>
        </Link>
        <Wraper>
          <div>
            <h1>{title}</h1>
            <p>User Score:{Math.round(vote_average) * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>
              {genres.map(({ name, id }) => (
                <span key={id}>{name} </span>
              ))}
            </p>
          </div>
          <img
            src={'https://image.tmdb.org/t/p/w500' + poster_path}
            alt={title}
            width={300}
          />
        </Wraper>
      </>
      <FilmInfo />
      <Outlet />
    </>
  );
};

export default MovieDetails;
