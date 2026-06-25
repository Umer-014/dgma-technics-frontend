import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Products.css";

function Products() {
  const capabilities = [
    {
      number: "01",
      title: "Land Systems",
      subtitle: "Mobility, protection and engineering support",
      description:
        "Broad capability areas related to land platforms, heavy engineering, mobility systems, maintenance and industrial support.",
      imageClass: "land-image",
      link: "/products/land-systems",
      tags: ["Heavy Engineering", "Mobility", "Maintenance"],
    },
    {
      number: "02",
      title: "Aerospace & Aviation",
      subtitle: "Aviation engineering and aerospace support",
      description:
        "Aviation-related manufacturing, maintenance, engineering, systems support and aerospace capability for qualified international engagement.",
      imageClass: "aerospace-image",
      link: "/products/aerospace",
      tags: ["Aviation", "Aerospace", "MRO Support"],
    },
    {
      number: "03",
      title: "Naval & Maritime",
      subtitle: "Shipbuilding, marine engineering and support",
      description:
        "Maritime engineering, shipbuilding, naval maintenance, marine systems and industrial support capability.",
      imageClass: "naval-image",
      link: "/products/naval",
      tags: ["Shipbuilding", "Marine Systems", "Naval Support"],
    },
    {
      number: "04",
      title: "Electronics & Communications",
      subtitle: "Technology-led systems and connectivity",
      description:
        "Electronics, communications, secure systems, surveillance technology and engineering-led integration capability.",
      imageClass: "electronics-image",
      link: "/products/electronics",
      tags: ["Electronics", "Communications", "Technology"],
    },
  ];

  const engagementPoints = [
    {
      number: "01",
      title: "Select a Capability Area",
      text: "Identify the sector most relevant to your organisation, project or operational requirement.",
    },
    {
      number: "02",
      title: "Submit a Secure Enquiry",
      text: "Provide a high-level summary of your requirement and relevant organisation details.",
    },
    {
      number: "03",
      title: "Professional Review",
      text: "DGMA reviews the request and supports the appropriate coordination process.",
    },
  ];

  return (
    <Layout>
      <main className="products-page">
        {/* HERO */}
        <section className="products-hero">
          <div className="products-grid-bg"></div>
          <div className="products-ring products-ring-one"></div>
          <div className="products-ring products-ring-two"></div>

          <div className="products-container products-hero-content">
            <p className="products-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              Capabilities
            </p>

            <p className="products-eyebrow">
              <span></span>
              DGMA Capability Sectors
            </p>

            <h1>
              Explore industrial capability,
              <span> sector by sector.</span>
            </h1>

            <p>
              DGMA Technics Limited supports international engagement across
              land systems, aerospace, maritime engineering, electronics,
              communications and wider industrial capability areas.
            </p>

            <Link to="/contact" className="products-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>

        {/* INTRO */}
        <section className="products-intro">
          <div className="products-container products-intro-grid">
            <div>
              <p className="products-label">Capability Overview</p>
              <h2>
                A structured route to complex engineering and industrial sectors.
              </h2>
            </div>

            <div className="products-intro-text">
              <p>
                Each capability area below provides a high-level overview of
                the relevant industrial ecosystem and the types of engagement
                DGMA can help coordinate.
              </p>

              <p>
                Detailed specifications, technical documents and commercial
                information are only considered through the appropriate
                professional and compliance-led process.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITY CARDS */}
        <section className="products-directory">
          <div className="products-container">
            <div className="products-directory-heading">
              <div>
                <p className="products-label">Capability Directory</p>
                <h2>Choose your sector of interest.</h2>
              </div>

              <span className="products-directory-count">
                04 Core Sectors
              </span>
            </div>

            <div className="products-capability-grid">
              {capabilities.map((capability) => (
                <article className="products-capability-card" key={capability.number}>
                  <div className={`capability-image ${capability.imageClass}`}>
                    <div className="capability-image-overlay"></div>

                    <div className="capability-image-top">
                      <span>{capability.number}</span>
                      <p>DGMA Capability</p>
                    </div>

                    <div className="capability-image-bottom">
                      <span>Explore Sector</span>
                      <b>↗</b>
                    </div>
                  </div>

                  <div className="capability-card-content">
                    <p className="capability-subtitle">{capability.subtitle}</p>

                    <h3>{capability.title}</h3>

                    <p className="capability-description">
                      {capability.description}
                    </p>

                    <div className="capability-tags">
                      {capability.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <Link to={capability.link} className="capability-card-link">
                      View Capability Area <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE / DOCUMENT RULE */}
        <section className="products-information-section">
          <div className="products-container products-information-box">
            <div className="products-information-icon">i</div>

            <div>
              <p className="products-label">Information Approach</p>
              <h2>High-level public information. Detailed engagement by request.</h2>

              <p>
                Public pages are designed to introduce broad sectors,
                manufacturer capability and engagement routes. Detailed
                technical specifications, controlled documents, drawings,
                product images and commercial information are reviewed only
                through the appropriate process.
              </p>
            </div>

            <Link to="/compliance" className="products-text-link">
              Compliance Approach <span>→</span>
            </Link>
          </div>
        </section>

        {/* HOW TO ENGAGE */}
        <section className="products-engagement">
          <div className="products-container">
            <div className="products-engagement-heading">
              <p className="products-label">How to Engage</p>
              <h2>From sector interest to professional coordination.</h2>
            </div>

            <div className="products-engagement-grid">
              {engagementPoints.map((point) => (
                <article className="products-engagement-card" key={point.number}>
                  <span>{point.number}</span>
                  <div></div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="products-cta">
          <div className="products-cta-pattern"></div>

          <div className="products-container products-cta-content">
            <p className="products-label">Start a Professional Enquiry</p>
            <h2>Tell us which capability area you want to explore.</h2>

            <p>
              Submit your organisation details and high-level requirement.
              DGMA will review the appropriate next step.
            </p>

            <Link to="/contact" className="products-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Products;