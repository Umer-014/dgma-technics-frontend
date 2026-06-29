import "./Loader.css";
import logo from "../../assets/dgma-logo.jpg";

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-grid"></div>

      <div className="loader-circle loader-circle-1"></div>
      <div className="loader-circle loader-circle-2"></div>

      <div className="loader-content">

        <img
          src={logo}
          alt="DGMA Technics Ltd"
          className="loader-logo"
        />

        <h1>DGMA TECHNICS LTD</h1>

        <p>
          Global Representation
          <br />
          Defence • Aerospace • Industry
        </p>

        <div className="loader-progress">
          <div className="loader-bar"></div>
        </div>

        <span>Initialising Platform...</span>

      </div>
    </div>
  );
}

export default Loader;