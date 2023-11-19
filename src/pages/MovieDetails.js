import { useEffect, useState } from 'react';
import { getSingleFilm } from '../components/GetFilms/Get';
import { useParams } from 'react-router-dom';
export const SingleFilm = () => {
  const moveId = useParams();
  // const id = moveId.moviesId;
  const [fetchedFilm, setFetchedFilm] = useState([moveId]);
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
        const data = await getSingleFilm(346698);

        setFetchedFilm(data);
      };
      fetchFilm();
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <p>User Score:{Math.round(vote_average) * 10}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>
        {genres.map(({ name, id }) => (
          <span key={id}>{name}</span>
        ))}
      </p>

      <img src={poster_path} alt={title} width={300} />

      {/* {fetchedFilms.length > 0 && (
        <ul>
          {fetchedFilms.map(dat => (
            <li key={dat.id}>
              <Link to={`/movies/${dat.id}`}>{dat.original_title}</Link>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
};
