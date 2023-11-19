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
      {/* <img src={poster_path} alt={title} width={300} />
      <p>
        {genres.map(({ name, id }) => (
          <span key={id}>{name}</span>
        ))}
      </p> */}
    </>
  );
};
