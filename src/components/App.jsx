import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import {Cast} from '../pages/Cast'
import { Reviews } from "pages/Reviews";
import { Movies } from "pages/Movies";



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
           <Route path="/movies" element={<Movies />}/>
           <Route path="/movies/:movieId" element={<MovieDetails />} >
             <Route path="cast" element={<Cast />} />
             <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
    </Routes>
    </>
  );
};






