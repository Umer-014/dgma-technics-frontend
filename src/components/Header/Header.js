import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import dgmaLogo from "../../assets/dgma-logo.jpg";
import "./Header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setCapabilitiesOpen(false);
  };

  return (
    <header className="site-header">

      {/* Main navigation */}
      <div className="main-header">
        <div className="header-wrapper navigation-row">

          {/* Official DGMA logo */}
          <Link to="/" className="brand" onClick={closeMenu}>
            <img
              src={dgmaLogo}
              alt="DGMA Technics Limited"
              className="brand-logo"
            />
          </Link>

          {/* Navigation links */}
          <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About DGMA
            </NavLink>

            <NavLink to="/representation" onClick={closeMenu}>
              DEPO Representation
            </NavLink>

            <NavLink to="/manufacturers" onClick={closeMenu}>
              Manufacturers
            </NavLink>

            {/* Capabilities dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setCapabilitiesOpen(true)}
              onMouseLeave={() => setCapabilitiesOpen(false)}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
              >
                Capabilities
                <span className="chevron">⌄</span>
              </button>

              <div
                className={`dropdown-menu ${
                  capabilitiesOpen ? "show" : ""
                }`}
              >
                <NavLink to="/products" onClick={closeMenu}>
                  All Capabilities
                </NavLink>

                <NavLink to="/products/land-systems" onClick={closeMenu}>
                  Land Systems
                </NavLink>

                <NavLink to="/products/aerospace" onClick={closeMenu}>
                  Aerospace & Aviation
                </NavLink>

                <NavLink to="/products/naval" onClick={closeMenu}>
                  Naval & Maritime
                </NavLink>

                <NavLink to="/products/electronics" onClick={closeMenu}>
                  Electronics & Communications
                </NavLink>
              </div>
            </div>

            <NavLink to="/compliance" onClick={closeMenu}>
              Compliance
            </NavLink>

            <NavLink to="/news" onClick={closeMenu}>
              News
            </NavLink>
          </nav>

          {/* Right side actions */}
          <div className="header-actions">
            <Link to="/contact" className="enquiry-button" onClick={closeMenu}>
              Submit Enquiry
              <span>→</span>
            </Link>

            <button
              className={`mobile-menu-button ${
                mobileMenuOpen ? "active" : ""
              }`}
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;