import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">

        <div className="logo">
          DGMA TECHNICS
        </div>

        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/representation">Representation</Link></li>
            <li><Link to="/manufacturers">Manufacturers</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <button className="contact-btn">
          Get In Touch
        </button>

      </div>
    </header>
  );
}

export default Header;