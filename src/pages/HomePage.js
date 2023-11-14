import { useState, useEffect } from 'react';
import { getFilms } from 'components/GetFilms/GetFilms';

export const HomePage = () => {
  const [fetchedFilms, setFetchedFilms] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // console.log(fetchedFilms);
  useEffect(() => {
    // setLoading(true);
    try {
      // setError(false);
      const fetchFilms = async () => {
        const films = await getFilms();
        console.log(films);
        setFetchedFilms(films);
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
      <h1>Home</h1>
      <h2>Trending today</h2>
      {/* {console.log(fetchedCountries.results)} */}
      {
        // <ul>
        //   {fetchedCountries.results.map(dat => (
        //     <li key={dat.id}>{dat}</li>
        //   ))}
        // </ul>
      }
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
