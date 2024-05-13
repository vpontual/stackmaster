import { useLocation, useNavigate } from 'react-router-dom';

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
         © StackMaster
        </h4>
    </footer>
  );
};

export default Footer;
