import Navigation from './Nav';

// Setting inline styles for the header element
const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#11111b',
    padding: '1rem',
    color: '#f9e2af',
  };
  // Setting inline styles for the h1 element
  const headingStyle = {
    margin: 0,
    fontSize: '2rem',
  };
  // Setting inline styles for the nav links
  const navLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    transition: 'background-color 0.3s ease',
  };
  // Setting inline styles for the active nav link
  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: '#f9e2af',
  };
  // Return the header element with the h1 element and the Navigation component
  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>StackMaster</h1>
      <Navigation
        navLinkStyle={navLinkStyle}
        activeNavLinkStyle={activeNavLinkStyle}
      />
    </header>
  );
};

export default Header;
