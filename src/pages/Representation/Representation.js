import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Representation.css";

function Representation() {
  const process = [
    {
      number: "01",
      title: "Requirement Review",
      text: "We receive and review the initial requirement, sector interest and relevant business context.",
    },
    {
      number: "02",
      title: "Capability Alignment",
      text: "Suitable industrial, engineering or technology capability areas are identified for further discussion.",
    },
    {
      number: "03",
      title: "Structured Coordination",
      text: "Qualified discussions are coordinated through the appropriate professional and compliance-led process.",
    },
    {
      number: "04",
      title: "Responsible Engagement",
      text: "Progress is subject to applicable due diligence, export-control and end-user requirements.",
    },
  ];

  const ecosystem = [
    "Land Systems & Heavy Engineering",
    "Aerospace & Aviation Capability",
    "Naval & Maritime Engineering",
    "Electronics & Communications",
    "Industrial Manufacturing",
    "Technology & Support Solutions",
  ];

  return (
    <Layout>
      <main className="representation-page">
        <section className="representation-hero">
          <div className="representation-grid-bg"></div>
          <div className="representation-ring ring-one"></div>
          <div className="representation-ring ring-two"></div>

          <div className="representation-container representation-hero-content">
            <p className="representation-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              DEPO Representation
            </p>

            <p className="representation-eyebrow">
              <span></span>
              DGMA Technics Limited
            </p>

            <h1>
              Globally representing
              <span> DEPO capability.</span>
            </h1>

            <p>
              Supporting professional international engagement with Pakistan’s
              defence, aerospace, engineering and technology manufacturing
              ecosystem.
            </p>

            <Link to="/contact" className="representation-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>

        <section className="representation-intro">
          <div className="representation-container representation-intro-grid">
            <div>
              <p className="representation-label">The Representation Role</p>
              <h2>Creating a professional route for international engagement.</h2>
            </div>

            <div className="representation-intro-text">
              <p>
                DGMA Technics Limited supports international stakeholders who
                wish to explore relevant capability areas connected with DEPO
                and Pakistan’s wider public-sector industrial ecosystem.
              </p>

              <p>
                We help establish clear communication, coordinate appropriate
                introductions and guide qualified enquiries through a structured
                business process.
              </p>
            </div>
          </div>
        </section>

        <section className="depo-overview">
          <div className="representation-container depo-overview-grid">
            <div className="depo-emblem">
              <span>DEPO</span>
              <small>Pakistan</small>
            </div>

            <div className="depo-overview-content">
              <p className="representation-label">Defence Export Promotion Organisation</p>
              <h2>A coordinated gateway to industrial capability.</h2>

              <p>
                DEPO provides a framework for promoting and facilitating
                international engagement across Pakistan’s defence and related
                industrial sectors.
              </p>

              <p>
                DGMA’s representation focus is to help international partners
                understand the available ecosystem, identify relevant capability
                areas and begin conversations through the appropriate channel.
              </p>
            </div>
          </div>
        </section>

        <section className="representation-ecosystem">
          <div className="representation-container ecosystem-grid">
            <div className="ecosystem-content">
              <p className="representation-label">Industrial Ecosystem</p>
              <h2>Multiple sectors. One coordinated approach.</h2>

              <p>
                The wider DEPO catalogue covers a diverse network of
                manufacturing and engineering organisations. DGMA helps direct
                qualified interest toward the most relevant capability sector.
              </p>

              <Link to="/manufacturers" className="representation-text-link">
                Explore manufacturers <span>→</span>
              </Link>
            </div>

            <div className="ecosystem-list">
              {ecosystem.map((item, index) => (
                <div className="ecosystem-item" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="representation-process">
          <div className="representation-container">
            <div className="process-heading">
              <p className="representation-label">How Engagement Works</p>
              <h2>A clear process from first enquiry to coordinated discussion.</h2>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <article className="process-card" key={item.number}>
                  <span>{item.number}</span>
                  <div></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="representation-compliance">
          <div className="representation-container compliance-panel">
            <div className="compliance-check">✓</div>

            <div>
              <p className="representation-label">Responsible Representation</p>
              <h2>Every enquiry is handled with compliance in mind.</h2>
              <p>
                Engagement is subject to applicable export-control obligations,
                due diligence, end-user documentation and relevant regulatory
                requirements.
              </p>
            </div>

            <Link to="/compliance" className="representation-text-link">
              View compliance approach <span>→</span>
            </Link>
          </div>
        </section>

        <section className="representation-cta">
          <div className="representation-cta-pattern"></div>

          <div className="representation-container representation-cta-content">
            <p className="representation-label">Start an Enquiry</p>
            <h2>Discuss your requirement with DGMA Technics Limited.</h2>
            <p>
              Submit your requirement securely and our team will review the
              appropriate next steps.
            </p>

            <Link to="/contact" className="representation-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Representation;