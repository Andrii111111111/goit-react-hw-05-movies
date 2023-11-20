import { getCast } from 'components/GetFilms/Get';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const [fetchedCast, setFetchedCast] = useState();

  console.log(fetchedCast);

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async () => {
        const data = await getCast(670290);

        setFetchedCast(data);
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
      <h1>Cast</h1>

      <ul>
        {fetchedCast.cast.map(({ name, id, character, profile_path }) => (
          <li key={id}>
            <img src={profile_path} alt={name} width={300} />
            <h3>{name}</h3>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
