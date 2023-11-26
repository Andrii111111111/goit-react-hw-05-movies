import { NavLink } from 'react-router-dom';
import { NavWraper } from './Header.styled';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavWraper>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </NavWraper>
        </nav>
      </header>
    </>
  );
};
