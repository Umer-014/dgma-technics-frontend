import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>DGMA Technics Ltd</h3>
          <p>
            Global representation for defence,
            aerospace and technology industries.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Manufacturers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            <li>Downloads</li>
            <li>News</li>
            <li>Representation</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Suite 2, 239 High Road</p>
          <p>Ilford, IG1 1NE</p>
          <p>United Kingdom</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 DGMA Technics Ltd
      </div>

    </footer>
  );
}

export default Footer;