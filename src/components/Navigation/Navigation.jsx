import css from './Navigation.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => `${isActive ? css.active : css.link}`;
const Navigation = () => (
  <>
    <nav>
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      <NavLink className={setActive} to="/movies">
        Movies
      </NavLink>
    </nav>
    <hr />
    <Outlet />
  </>
);

export default Navigation;
