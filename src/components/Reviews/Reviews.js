import { getReviews } from 'components/GetFilms/Get';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [fetchedReviews, setFetchedReviews] = useState([]);
  const moveId = useParams();
  const id = moveId.movieId;

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async () => {
        const { results } = await getReviews(id);

        setFetchedReviews(results);
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
      {fetchedReviews.length === 0 &&
        'We don`t have any reviews for this movie'}
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

export default Reviews;
