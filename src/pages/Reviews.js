import { getReviews } from 'components/GetFilms/Get';
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [fetchedReviews, setFetchedReviews] = useState();

  console.log(fetchedReviews);

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async () => {
        const data = await getReviews(670290);

        setFetchedReviews(data);
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
      <h1>Reviews</h1>
      {/* <img src={poster_path} alt={title} width={300} />
      <p>
        {genres.map(({ name, id }) => (
          <span key={id}>{name}</span>
        ))}
      </p> */}
    </>
  );
};
