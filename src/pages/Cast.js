import { getCast } from 'components/GetFilms/Get';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [fetchedCast, setFetchedCast] = useState([]);
  const moveId = useParams();
  const id = moveId.movieId;

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async () => {
        const { cast } = await getCast(id);

        setFetchedCast(cast);
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
      {fetchedCast.length > 0 && (
        <ul>
          {fetchedCast.map(({ name, id, character, profile_path }) => (
            <li key={id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + profile_path}
                alt={name}
                width={300}
              />
              <h3>{name}</h3>
              <p>Character:{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
