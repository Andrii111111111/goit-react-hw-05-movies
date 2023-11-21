import { getReviews } from 'components/GetFilms/Get';
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [fetchedReviews, setFetchedReviews] = useState([]);

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async id => {
        const { results } = await getReviews();

        setFetchedReviews(results);
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
      {fetchedReviews.length > 0 && (
        <ul>
          {fetchedReviews.map(({ id, content, author }) => (
            <li key={id}>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
