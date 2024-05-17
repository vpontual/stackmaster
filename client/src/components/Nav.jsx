//nav bar for header
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

// The Navigation component should render a list of NavLink components.
const Navigation = ({ navLinkStyle, activeNavLinkStyle }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav>
      <ul
        className="nav-links"
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          color: 'white',
        }}>
        <li className="nav-item" style={{ marginRight: '1rem' }}>
          <NavLink
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.2rem',
              padding: '0.5rem 1rem',
            }}>
            {Auth.loggedIn() ? `Welcome, ${Auth.getProfile().data.username}` : ''}
          </NavLink>
        </li>

        <li className="nav-item" style={{ marginRight: '1rem' }}>
          <NavLink to="/categories" end style={({ isActive }) => (isActive ? activeNavLinkStyle : navLinkStyle)}>
            Study
          </NavLink>
        </li>
        {/* REMOVE COMMENT WHEN QUIZ PAGE IS IMPLEMENTED */}
        {/* <li className="nav-item" style={{ marginRight: '1rem' }}>
          <NavLink to="/quiz" end style={({ isActive }) => (isActive ? activeNavLinkStyle : navLinkStyle)}>
            Quiz
          </NavLink>
        </li> */}
        <li className="nav-item" style={{ marginRight: '1rem' }}>
          {Auth.loggedIn() ? (
            <>
              <NavLink to="/profile" style={({ isActive }) => (isActive ? activeNavLinkStyle : navLinkStyle)}>
                Profile
              </NavLink>
              <NavLink
                to="/login"
                onClick={logout}
                style={({ isActive }) => (isActive ? activeNavLinkStyle : navLinkStyle)}>
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" style={({ isActive }) => (isActive ? activeNavLinkStyle : navLinkStyle)}>
                Login
              </NavLink>
              <NavLink to="/signup" style={({ isActive }) => (isActive ? activeNavLinkStyle : navLinkStyle)}>
                Sign Up
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
