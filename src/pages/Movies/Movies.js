import { getMoviesSearch } from 'components/GetFilms/Get';
import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import { Form } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviestList';

const Movies = () => {
  // const [data, setData] = useState('');
  const [fetchedFilms, setFetchedFilms] = useState([]);
  // const [currentData, setCurrentData] = useState('');
  const [params, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const searchValue = form.elements.data.value;
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    const filmQuery = params.get('query');
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async () => {
        const { results } = await getMoviesSearch(filmQuery);

        setFetchedFilms(results);
      };
      fetchFilm();
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  }, [params]);

  return (
    <>
      <header>
        <Form onSubmit={handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            name="data"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
        </Form>
      </header>
      {fetchedFilms.length > 0 && <MoviesList fetchedFilms={fetchedFilms} />}
    </>
  );
};

export default Movies;
