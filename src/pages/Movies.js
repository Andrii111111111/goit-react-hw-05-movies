import { getMoviesSearch } from 'components/GetFilms/Get';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Movies = () => {
  const [data, setData] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [currentData, setCurrentData] = useState('');

  const handleSubmit = evt => {
    setData(currentData);
    evt.preventDefault();

    if (data.trim() === '') {
      toast.error('Please enter your search details.');
      return;
    }
  };

  const handleChange = e => {
    setCurrentData(e.currentTarget.value);
  };

  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilm = async query => {
        const { results } = await getMoviesSearch(data);

        setMoviesSearch(results);
      };
      fetchFilm();
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  }, [data]);

  return (
    <>
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            onChange={handleChange}
            // value={data}
            name="data"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
        </form>
      </header>
      {moviesSearch.length > 0 && (
        <ul>
          {moviesSearch.map(dat => (
            <li key={dat.id}>
              <Link to={`/movies/${dat.id}`}>{dat.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
