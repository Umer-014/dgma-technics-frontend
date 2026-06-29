import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./NotFound.css";

function NotFound() {
  return (
    <Layout>
      <main className="notfound-page">

        <div className="nf-grid"></div>

        <div className="nf-circle circle-1"></div>
        <div className="nf-circle circle-2"></div>

        <div className="nf-container">

          <span className="nf-code">
            404
          </span>

          <p className="nf-label">
            PAGE NOT FOUND
          </p>

          <h1>
            The page you're looking for
            <span> doesn't exist.</span>
          </h1>

          <p className="nf-description">
            The page may have been moved, renamed or the address may be
            incorrect. Please return to the homepage or contact DGMA
            Technics Limited if you require assistance.
          </p>

          <div className="nf-buttons">

            <Link
              to="/"
              className="nf-primary"
            >
              Return Home
            </Link>

            <Link
              to="/contact"
              className="nf-secondary"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </main>
    </Layout>
  );
}

export default NotFound;