import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

function Home() {
  const capabilities = [
    {
      number: "01",
      title: "Land Systems",
      text: "Engineering, mobility, protection and mission-support solutions for land-based operations.",
      link: "/products/land-systems",
    },
    {
      number: "02",
      title: "Aerospace & Aviation",
      text: "Aviation engineering, aerospace manufacturing, maintenance and support capabilities.",
      link: "/products/aerospace",
    },
    {
      number: "03",
      title: "Naval & Maritime",
      text: "Shipbuilding, maritime engineering, naval platforms and associated support solutions.",
      link: "/products/naval",
    },
    {
      number: "04",
      title: "Electronics & Communications",
      text: "Secure communications, surveillance, electronics and technology-led system integration.",
      link: "/products/electronics",
    },
  ];

  const manufacturers = [
    "Pakistan Ordnance Factories",
    "Heavy Industries Taxila",
    "National Radio & Telecommunication Corporation",
    "Pakistan Aeronautical Complex",
    "Karachi Shipyard & Engineering Works",
    "Global Industrial & Defence Solutions",
  ];

  return (
    <Layout>
      <main className="home-page">
        {/* HERO */}
        <section className="home-hero">
          <div className="hero-grid"></div>
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <div className="home-container hero-content">
            <div className="hero-eyebrow">
              <span></span>
              International Representation & Strategic Coordination
            </div>

            <h1>
              Connecting Global Partners With
              <span> Pakistan’s Engineering Capability.</span>
            </h1>

            <p className="hero-description">
              DGMA Technics Limited provides international representation,
              coordination and business-development support across defence,
              aerospace, engineering and technology sectors.
            </p>

            <div className="hero-buttons">
              <Link to="/representation" className="primary-button">
                Explore DEPO Representation <span>→</span>
              </Link>

              <Link to="/contact" className="secondary-button">
                Submit Secure Enquiry
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>Global</strong>
                <span>Representation</span>
              </div>

              <div>
                <strong>Multi-Sector</strong>
                <span>Engineering Capability</span>
              </div>

              <div>
                <strong>Compliance</strong>
                <span>Focused Engagement</span>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <span></span>
            Scroll to explore
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="home-intro section-space">
          <div className="home-container intro-grid">
            <div className="section-heading">
              <p className="section-label">Who We Are</p>
              <h2>
                A trusted bridge between industry capability and international
                opportunity.
              </h2>
            </div>

            <div className="intro-content">
              <p>
                DGMA Technics Limited supports international engagement with
                Pakistan’s established defence, aerospace, engineering and
                technology manufacturing ecosystem.
              </p>

              <p>
                Our role is to facilitate professional communication,
                manufacturer coordination, capability introductions and
                structured business enquiries for qualified international
                partners.
              </p>

              <Link to="/about" className="text-link">
                Learn more about DGMA <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* DEPO REPRESENTATION */}
        <section className="depo-section">
          <div className="home-container depo-grid">
            <div className="depo-mark">
              <span>DEPO</span>
              <small>Pakistan</small>
            </div>

            <div className="depo-content">
              <p className="section-label">Official Representation Focus</p>
              <h2>Globally Representing DEPO</h2>

              <p>
                DGMA Technics Limited is positioned to support international
                engagement with the Defence Export Promotion Organisation of
                Pakistan and its wider manufacturing network.
              </p>

              <p>
                Through structured coordination, we help connect suitable
                international stakeholders with relevant industrial,
                engineering and technology capabilities.
              </p>

              <Link to="/representation" className="gold-outline-button">
                Discover DEPO Representation <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="capabilities-section section-space">
          <div className="home-container">
            <div className="section-top-row">
              <div>
                <p className="section-label">Core Capability Sectors</p>
                <h2>Built for complex industries and international partnerships.</h2>
              </div>

              <Link to="/products" className="text-link desktop-link">
                View all capabilities <span>→</span>
              </Link>
            </div>

            <div className="capability-grid">
              {capabilities.map((capability) => (
                <Link
                  to={capability.link}
                  className="capability-card"
                  key={capability.number}
                >
                  <span className="capability-number">{capability.number}</span>
                  <div className="capability-line"></div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                  <span className="capability-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MANUFACTURERS */}
        <section className="manufacturers-section">
          <div className="home-container manufacturers-grid">
            <div className="manufacturers-content">
              <p className="section-label">Industrial Network</p>
              <h2>Access to a diverse manufacturing ecosystem.</h2>

              <p>
                The DEPO catalogue highlights leading public-sector
                organisations across land, sea, air, communications and
                industrial manufacturing. DGMA helps direct qualified
                enquiries to the appropriate capability area.
              </p>

              <Link to="/manufacturers" className="primary-button">
                Explore Manufacturers <span>→</span>
              </Link>
            </div>

            <div className="manufacturer-list">
              {manufacturers.map((manufacturer, index) => (
                <div className="manufacturer-item" key={manufacturer}>
                  <span>0{index + 1}</span>
                  <p>{manufacturer}</p>
                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="compliance-section section-space">
          <div className="home-container compliance-box">
            <div className="compliance-symbol">✓</div>

            <div>
              <p className="section-label">Responsible Engagement</p>
              <h2>Compliance-led international business.</h2>
              <p>
                All enquiries are managed subject to applicable export-control,
                compliance, due-diligence and end-user verification
                requirements.
              </p>
            </div>

            <Link to="/compliance" className="text-link">
              Our compliance approach <span>→</span>
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="home-cta">
          <div className="cta-lines"></div>

          <div className="home-container cta-content">
            <p className="section-label">Start a Professional Conversation</p>
            <h2>Discuss your requirement with DGMA Technics Limited.</h2>

            <p>
              Submit a secure enquiry and our team will review your request
              through the appropriate coordination and compliance process.
            </p>

            <Link to="/contact" className="primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;