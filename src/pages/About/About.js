import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./About.css";

function About() {
  const values = [
    {
      number: "01",
      title: "Professional Representation",
      text: "We support clear, credible and structured engagement between international partners and relevant industrial capability areas.",
    },
    {
      number: "02",
      title: "Strategic Coordination",
      text: "We help direct qualified enquiries, capability discussions and business requirements through an organised coordination process.",
    },
    {
      number: "03",
      title: "Responsible Engagement",
      text: "Our approach recognises the importance of compliance, due diligence and appropriate end-user verification.",
    },
  ];

  const sectors = [
    "Defence & Security",
    "Aerospace & Aviation",
    "Naval & Maritime",
    "Engineering & Manufacturing",
    "Electronics & Communications",
    "Technology & Industrial Support",
  ];

  return (
    <Layout>
      <main className="about-page">
        {/* PAGE HERO */}
        <section className="about-hero">
          <div className="about-hero-grid"></div>
          <div className="about-hero-circle about-circle-one"></div>
          <div className="about-hero-circle about-circle-two"></div>

          <div className="about-container about-hero-content">
            <p className="about-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              About DGMA
            </p>

            <p className="about-eyebrow">
              <span></span>
              About DGMA Technics Limited
            </p>

            <h1>
              International representation,
              <span> built on professional coordination.</span>
            </h1>

            <p className="about-hero-text">
              DGMA Technics Limited supports international engagement across
              defence, aerospace, engineering and technology sectors through
              structured representation, coordination and business-development support.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="about-intro">
          <div className="about-container about-intro-grid">
            <div className="about-heading-block">
              <p className="about-section-label">Our Role</p>
              <h2>
                Connecting international opportunity with established industrial capability.
              </h2>
            </div>

            <div className="about-intro-content">
              <p>
                DGMA Technics Limited acts as a professional point of contact
                for international organisations seeking to understand and engage
                with relevant manufacturing, engineering and technology capabilities.
              </p>

              <p>
                We support the early stages of engagement by helping partners
                identify suitable sectors, coordinate capability discussions and
                submit structured business enquiries.
              </p>

              <p>
                Our work is focused on creating clear communication, credible
                introductions and responsible commercial engagement.
              </p>
            </div>
          </div>
        </section>

        {/* REPRESENTATION STATEMENT */}
        <section className="about-representation">
          <div className="about-container representation-grid">
            <div className="representation-mark">
              <span>DGMA</span>
              <small>Global Reach</small>
            </div>

            <div className="representation-content">
              <p className="about-section-label">Representation Focus</p>
              <h2>Globally representing DEPO-related capability.</h2>

              <p>
                DGMA Technics Limited is positioned to support international
                engagement connected with the Defence Export Promotion Organisation
                of Pakistan and its wider industrial ecosystem.
              </p>

              <p>
                Our role is to help qualified stakeholders navigate capability
                areas, initiate appropriate discussions and progress enquiries
                through a professional coordination process.
              </p>

              <Link to="/representation" className="about-outline-button">
                Explore DEPO Representation <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="about-values">
          <div className="about-container">
            <div className="about-values-heading">
              <div>
                <p className="about-section-label">How We Work</p>
                <h2>Built around clarity, credibility and responsible engagement.</h2>
              </div>
            </div>

            <div className="about-values-grid">
              {values.map((value) => (
                <article className="about-value-card" key={value.number}>
                  <span className="value-number">{value.number}</span>
                  <div className="value-line"></div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section className="about-sectors">
          <div className="about-container sectors-grid">
            <div className="sectors-content">
              <p className="about-section-label">Sector Coverage</p>
              <h2>Supporting engagement across complex industries.</h2>

              <p>
                DGMA’s focus spans a broad industrial landscape, helping
                international partners explore relevant capability areas through
                a structured and informed approach.
              </p>

              <Link to="/products" className="about-primary-button">
                Explore Capabilities <span>→</span>
              </Link>
            </div>

            <div className="sectors-list">
              {sectors.map((sector, index) => (
                <div className="sector-item" key={sector}>
                  <span>0{index + 1}</span>
                  <p>{sector}</p>
                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="about-compliance">
          <div className="about-container about-compliance-box">
            <div className="about-compliance-icon">✓</div>

            <div>
              <p className="about-section-label">Responsible Business</p>
              <h2>Compliance is part of every serious conversation.</h2>
              <p className="about-compliance-text">
                DGMA supports engagement that is subject to applicable
                export-control requirements, due diligence, compliance review
                and end-user verification.
              </p>
            </div>

            <Link to="/compliance" className="about-text-link">
              Compliance Approach <span>→</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="about-cta-pattern"></div>

          <div className="about-container about-cta-content">
            <p className="about-section-label">Start a Conversation</p>
            <h2>Discuss your international requirement with DGMA.</h2>

            <p>
              Submit a secure enquiry and our team will review your request
              through the appropriate coordination and compliance process.
            </p>

            <Link to="/contact" className="about-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;