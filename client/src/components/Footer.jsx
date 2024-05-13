

const Footer = () => {
  const footerstyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#11111b',
    padding: '1rem',
    color: '#f9e2af',
  }
  return (
    <footer style={footerstyle}>  
        <h4>
         Get your Stack on! © 2024 StackMaster
        </h4>
    </footer>
  );
};

export default Footer;
