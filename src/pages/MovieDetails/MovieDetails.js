import { useEffect, useRef, useState } from 'react';
import { getSingleFilm } from '../../components/GetFilms/Get';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import FilmInfo from '../../components/FilmInfo/FilmInfo';
import { Wraper, Button } from './Movie.styled';
import foto from '../../components/NotFoundActor/NotFoundActor.jpeg';

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

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  console.log(location);
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
        <Link to={backLink.current}>
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
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w500' + poster_path
                : foto
            }
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
