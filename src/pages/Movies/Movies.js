import { getMoviesSearch } from 'components/GetFilms/Get';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviestList';

const Movies = () => {
  const [data, setData] = useState('');
  const [fetchedFilms, setFetchedFilms] = useState([]);
  const [currentData, setCurrentData] = useState('');
  const [params, setParams] = useSearchParams();

  const handleSubmit = evt => {
    setData(currentData);
    setParams(currentData);

    evt.preventDefault();

    if (data.trim() === '') {
      toast.error('Please enter your search details.');
      return;
    }
  };

  // const handleChange = e => {
  //   // setCurrentData(e.currentTarget.value);

  // };
  // const filmQuery = params.get('film');
  // console.log(filmQuery);
  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async query => {
        const { results } = await getMoviesSearch(data.filmQuery);

        setFetchedFilms(results);
      };
      fetchFilm();
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  }, [data, params]);

  return (
    <>
      <header>
        <Form onSubmit={handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            onChange={evt => setCurrentData({ filmQuery: evt.target.value })}
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
