import Layout from "../../components/Layout/Layout";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <div className="home-overlay">
          <h1>DGMA Technics Ltd</h1>
          <p>
            Global Representation for Defence,
            Aerospace & Technology Industries
          </p>
        </div>
      </section>

      <section className="home-about">
        <h2>About DGMA</h2>
        <p>
          DGMA Technics Ltd provides strategic
          representation and business development
          services for defence manufacturers.
        </p>
      </section>
    </Layout>
  );
}

export default Home;