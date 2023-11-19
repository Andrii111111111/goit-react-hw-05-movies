import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Search</NavLink>
        </nav>
      </header>
    </>
  );
};
