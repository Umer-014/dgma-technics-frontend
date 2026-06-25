import { Link } from "react-router-dom";
import dgmaLogo from "../../assets/dgma-logo.jpg";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-line"></div>

      <div className="footer-container">
        <div className="footer-grid">

          {/* Company information */}
          <div className="footer-company">
            <Link to="/" className="footer-logo-link">
              <img
                src={dgmaLogo}
                alt="DGMA Technics Limited"
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              DGMA Technics Limited provides international representation,
              coordination and business-development support across defence,
              aerospace, engineering and technology sectors.
            </p>

            <div className="footer-badge">
              <span className="footer-badge-dot"></span>
              Globally Representing DEPO
            </div>
          </div>

          {/* Company links */}
          <div className="footer-column">
            <h4>Company</h4>

            <ul>
              <li>
                <Link to="/about">About DGMA</Link>
              </li>

              <li>
                <Link to="/representation">DEPO Representation</Link>
              </li>

              <li>
                <Link to="/manufacturers">Manufacturers</Link>
              </li>

              <li>
                <Link to="/news">News & Insights</Link>
              </li>
            </ul>
          </div>

          {/* Capabilities links */}
          <div className="footer-column">
            <h4>Capabilities</h4>

            <ul>
              <li>
                <Link to="/products">All Capabilities</Link>
              </li>

              <li>
                <Link to="/products/land-systems">Land Systems</Link>
              </li>

              <li>
                <Link to="/products/aerospace">Aerospace & Aviation</Link>
              </li>

              <li>
                <Link to="/products/naval">Naval & Maritime</Link>
              </li>

              <li>
                <Link to="/products/electronics">
                  Electronics & Communications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="footer-column footer-contact">
            <h4>Contact</h4>

            <p>
              <span className="footer-contact-label">Office</span>
              Suite 2, 239 High Road,
              <br />
              Ilford, IG1 1NE,
              <br />
              United Kingdom
            </p>

            <a href="mailto:info@dgmatechnics.com">
              <span className="footer-contact-label">Email</span>
              info@dgmatechnics.com
            </a>

            <Link to="/contact" className="footer-enquiry-link">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>

        </div>

        {/* Compliance notice */}
        <div className="footer-compliance">
          <span className="compliance-icon">✓</span>

          <p>
            All enquiries and engagements are subject to applicable export-control,
            compliance and end-user verification requirements.
          </p>
        </div>

        {/* Bottom footer */}
        <div className="footer-bottom">
          <p>
            © {currentYear} DGMA Technics Limited. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span></span>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span></span>
            <Link to="/compliance">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;