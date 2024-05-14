import Navigation from './Nav';

// Setting inline styles for the header element
const Header = () => {
  
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
    <header className="display-flex justify-between items-center bg-banner text-header p-4">
      <h1 className="m-0 text-4xl">StackMaster</h1>
      <Navigation
        navLinkStyle={navLinkStyle}
        activeNavLinkStyle={activeNavLinkStyle}
      />
    </header>
  );
};

export default Header;
