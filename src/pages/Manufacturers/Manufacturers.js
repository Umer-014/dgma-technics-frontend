import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Manufacturers.css";

function Manufacturers() {
  const manufacturers = [
    {
      number: "01",
      name: "Pakistan Ordnance Factories",
      short: "POF",
      sector: "Defence Manufacturing",
      description:
        "A major manufacturing organisation supporting defence production, engineering capability and associated industrial solutions.",
      tags: ["Manufacturing", "Engineering", "Support Solutions"],
    },
    {
      number: "02",
      name: "Heavy Industries Taxila",
      short: "HIT",
      sector: "Heavy Engineering & Land Systems",
      description:
        "A specialist organisation focused on heavy engineering, land-system manufacturing, maintenance and industrial support capability.",
      tags: ["Heavy Engineering", "Land Systems", "Maintenance"],
    },
    {
      number: "03",
      name: "National Radio & Telecommunication Corporation",
      short: "NRTC",
      sector: "Electronics & Communications",
      description:
        "A technology-focused organisation supporting electronics, communications, secure systems and related engineering capability.",
      tags: ["Communications", "Electronics", "Technology"],
    },
    {
      number: "04",
      name: "Pakistan Aeronautical Complex",
      short: "PAC",
      sector: "Aerospace & Aviation",
      description:
        "An aerospace organisation supporting aviation manufacturing, maintenance, engineering and aviation-related capability.",
      tags: ["Aviation", "Aerospace", "MRO Support"],
    },
    {
      number: "05",
      name: "Karachi Shipyard & Engineering Works",
      short: "KSEW",
      sector: "Naval & Maritime Engineering",
      description:
        "A maritime engineering organisation supporting shipbuilding, naval engineering, repair and industrial marine capability.",
      tags: ["Shipbuilding", "Maritime", "Engineering"],
    },
    {
      number: "06",
      name: "Pakistan Navy Dockyard",
      short: "PND",
      sector: "Naval Support & Maintenance",
      description:
        "A specialist naval support organisation associated with maritime maintenance, engineering and technical support capability.",
      tags: ["Naval Support", "Maintenance", "Marine Systems"],
    },
    {
      number: "07",
      name: "Global Industrial & Defence Solutions",
      short: "GIDS",
      sector: "Integrated Defence & Technology",
      description:
        "An organisation supporting integrated industrial, technology and defence-related solution development for international engagement.",
      tags: ["Integrated Solutions", "Technology", "Engineering"],
    },
    {
      number: "08",
      name: "Pakistan Machine Tool Factory",
      short: "PMTF",
      sector: "Industrial Manufacturing",
      description:
        "An industrial manufacturing organisation supporting precision engineering, machinery and production capability.",
      tags: ["Machine Tools", "Precision Engineering", "Manufacturing"],
    },
    {
      number: "09",
      name: "Peoples Steel Mills",
      short: "PSM",
      sector: "Metallurgy & Steel Manufacturing",
      description:
        "A specialist steel and metallurgy organisation supporting industrial materials, manufacturing and engineering supply capability.",
      tags: ["Steel", "Metallurgy", "Industrial Supply"],
    },
    {
      number: "10",
      name: "Heavy Mechanical Complex",
      short: "HMC",
      sector: "Heavy Industrial Engineering",
      description:
        "An industrial engineering organisation supporting fabrication, mechanical systems, industrial plant and large-scale manufacturing.",
      tags: ["Fabrication", "Mechanical Systems", "Industrial Engineering"],
    },
  ];

  return (
    <Layout>
      <main className="manufacturers-page">
        {/* HERO */}
        <section className="manufacturers-hero">
          <div className="manufacturers-grid-bg"></div>
          <div className="manufacturers-ring manufacturers-ring-one"></div>
          <div className="manufacturers-ring manufacturers-ring-two"></div>

          <div className="manufacturers-container manufacturers-hero-content">
            <p className="manufacturers-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              Manufacturers
            </p>

            <p className="manufacturers-eyebrow">
              <span></span>
              DEPO Industrial Ecosystem
            </p>

            <h1>
              Manufacturing capability,
              <span> connected globally.</span>
            </h1>

            <p>
              Explore a diverse network of public-sector organisations across
              defence manufacturing, aerospace, maritime engineering,
              communications, technology and industrial capability.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="manufacturers-intro">
          <div className="manufacturers-container manufacturers-intro-grid">
            <div>
              <p className="manufacturers-label">Our Network</p>
              <h2>
                A broad ecosystem of engineering, manufacturing and technology capability.
              </h2>
            </div>

            <div className="manufacturers-intro-text">
              <p>
                The DEPO ecosystem brings together specialist organisations
                across multiple sectors. DGMA supports qualified international
                partners by helping identify the most relevant capability area.
              </p>

              <p>
                Select a manufacturer profile below to understand its broad
                sector focus, then submit a secure enquiry for further
                information.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="manufacturers-directory">
          <div className="manufacturers-container">
            <div className="directory-heading">
              <div>
                <p className="manufacturers-label">Manufacturer Directory</p>
                <h2>Explore the network.</h2>
              </div>

              <span className="directory-count">
                {manufacturers.length} Organisations
              </span>
            </div>

            <div className="manufacturers-grid">
              {manufacturers.map((manufacturer) => (
                <article className="manufacturer-card" key={manufacturer.number}>
                  <div className="manufacturer-card-top">
                    <span className="manufacturer-number">
                      {manufacturer.number}
                    </span>

                    <div className="manufacturer-short">
                      {manufacturer.short}
                    </div>
                  </div>

                  <p className="manufacturer-sector">
                    {manufacturer.sector}
                  </p>

                  <h3>{manufacturer.name}</h3>

                  <p className="manufacturer-description">
                    {manufacturer.description}
                  </p>

                  <div className="manufacturer-tags">
                    {manufacturer.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="manufacturer-enquiry-link"
                  >
                    Request Information <span>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW DGMA HELPS */}
        <section className="manufacturer-support">
          <div className="manufacturers-container support-grid">
            <div className="support-mark">
              <span>DGMA</span>
              <small>Coordination</small>
            </div>

            <div className="support-content">
              <p className="manufacturers-label">How DGMA Supports You</p>
              <h2>From sector interest to the right professional conversation.</h2>

              <div className="support-points">
                <div>
                  <span>01</span>
                  <p>Help identify the relevant manufacturer or capability sector.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Support structured communication and initial requirement review.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Guide qualified enquiries through appropriate coordination channels.</p>
                </div>
              </div>

              <Link to="/contact" className="manufacturers-primary-button">
                Submit Secure Enquiry <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="manufacturers-compliance">
          <div className="manufacturers-container manufacturers-compliance-box">
            <div className="manufacturers-check">✓</div>

            <div>
              <p className="manufacturers-label">Responsible Engagement</p>
              <h2>Detailed information is provided through the appropriate process.</h2>
              <p>
                Requests for technical documentation, commercial information or
                detailed capability discussions are subject to applicable
                compliance, export-control and end-user verification requirements.
              </p>
            </div>

            <Link to="/compliance" className="manufacturers-text-link">
              Compliance Approach <span>→</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="manufacturers-cta">
          <div className="manufacturers-cta-pattern"></div>

          <div className="manufacturers-container manufacturers-cta-content">
            <p className="manufacturers-label">Find the Right Capability</p>
            <h2>Tell us what you are looking for.</h2>

            <p>
              Submit your sector interest or business requirement and DGMA will
              help guide the appropriate next step.
            </p>

            <Link to="/contact" className="manufacturers-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Manufacturers;