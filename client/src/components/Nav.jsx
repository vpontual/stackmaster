import { NavLink } from 'react-router-dom';

// The Navigation component should render a list of NavLink components.
const Navigation = ({ navLinkStyle, activeNavLinkStyle }) => {
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
        }}
      >
        <li className="nav-item" style={{ marginRight: '1rem' }}>
          <NavLink
            to="/study"
            end
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            Study
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: '1rem' }}>
          <NavLink
            to="/quiz"
            end
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            Quiz
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: '1rem' }}>
          <NavLink
            to="/profile"
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: '1rem' }}>
          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            Login / Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
