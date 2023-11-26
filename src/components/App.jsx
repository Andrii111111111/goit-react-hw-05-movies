// import { Home } from "pages/Home/Home";
// import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
// import {Cast} from './Cast/Cast'
// import { Reviews } from "components/Reviews/Reviews";
// import { Movies } from "pages/Movies/Movies";
import { lazy } from "react";


const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const Home = lazy(() => import("../pages/Home/Home"));
// const Layout = lazy(() => import("./Layout/Layout"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
             <Route path="cast" element={<Cast />} />
             <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};






