import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            BikeVentures
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="login-button">
            Login
          </Link>
          <Link to="/cart" className="cart-button">
            <ShoppingCartIcon className="cart-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 