import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ fetchedFilms }) => {
  const location = useLocation();

  return (
    <ul>
      {fetchedFilms.map(dat => (
        <li key={dat.id}>
          <Link to={`/movies/${dat.id}`} state={{ from: location }}>
            {dat.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
