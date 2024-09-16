import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure this file contains your custom CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container1">
        <Link to="/" className="navbar-brand">
          <img
            src="image/Home_Page-Images/hh 02.png"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carpainter">Carpenter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/restoration">Restoration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-buttons">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/logout" className="btn btn-logout">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
