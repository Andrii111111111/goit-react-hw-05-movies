import { HomePage } from "pages/HomePage";
import { NavLink, Route, Routes } from "react-router-dom";



export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Search</NavLink>
         
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage/ >} />
        <Route path="/movies" element={<div>Search films</div>} />
        <Route path="/movies/:movieId" element={<div>Single film</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Actors list</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Description film</div>} />
    </Routes>
    </>
  );
};






