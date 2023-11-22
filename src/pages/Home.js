import { useEffect, useState } from 'react';
import { getFilms } from 'components/GetFilms/Get';
import { Link } from 'react-router-dom';

export const Home = () => {
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

      {fetchedFilms.length > 0 && (
        <ul>
          {fetchedFilms.map(dat => (
            <li key={dat.id}>
              <Link to={`/movies/${dat.id}`}>{dat.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// codeSpell

// export default function HomePage(data) {
//   return (
//     <>
//       <h1>Home</h1>
//       <h2>Trending today</h2>
//       {console.log(data)}
//       {/* <ul>
//         {data.results.map(dat => (
//           <li key={dat.id}>{dat}</li>
//         ))}
//       </ul> */}
//     </>
//   );
// }
