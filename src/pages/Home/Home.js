import { useEffect, useState } from 'react';
import { getFilms } from 'components/GetFilms/Get';
import { Link } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviestList';

const Home = () => {
  const [fetchedFilms, setFetchedFilms] = useState([]);

  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilms = async () => {
        const { results } = await getFilms();

        setFetchedFilms(results);
      };
      fetchFilms();
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      {fetchedFilms.length > 0 && <MoviesList fetchedFilms={fetchedFilms} />}
    </>
  );
};

export default Home;
