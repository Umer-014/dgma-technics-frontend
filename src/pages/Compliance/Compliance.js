import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Compliance.css";

function Compliance() {
  const principles = [
    {
      number: "01",
      title: "Export Control Awareness",
      text: "All enquiries, discussions and potential engagements are considered in line with applicable export-control obligations and relevant regulatory requirements.",
    },
    {
      number: "02",
      title: "Due Diligence",
      text: "DGMA may request relevant company, project and commercial information before progressing an enquiry through the appropriate coordination process.",
    },
    {
      number: "03",
      title: "End-User Verification",
      text: "Where required, engagement may be subject to end-user information, intended-use clarification and supporting documentation.",
    },
    {
      number: "04",
      title: "Responsible Information Sharing",
      text: "Detailed technical, commercial or controlled information is only shared through the appropriate authorised process.",
    },
  ];

  const enquirySteps = [
    {
      number: "01",
      title: "Submit Your Enquiry",
      text: "Provide a clear overview of your organisation, sector interest and business requirement.",
    },
    {
      number: "02",
      title: "Initial Review",
      text: "DGMA reviews the enquiry to understand the relevant capability area and required next steps.",
    },
    {
      number: "03",
      title: "Information Request",
      text: "Where necessary, additional company, project, end-user or intended-use information may be requested.",
    },
    {
      number: "04",
      title: "Appropriate Coordination",
      text: "Qualified enquiries may then progress through the relevant professional, commercial and compliance-led channel.",
    },
  ];

  return (
    <Layout>
      <main className="compliance-page">
        {/* HERO */}
        <section className="compliance-hero">
          <div className="compliance-grid-bg"></div>
          <div className="compliance-ring compliance-ring-one"></div>
          <div className="compliance-ring compliance-ring-two"></div>

          <div className="compliance-container compliance-hero-content">
            <p className="compliance-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              Compliance
            </p>

            <p className="compliance-eyebrow">
              <span></span>
              Responsible International Engagement
            </p>

            <h1>
              Compliance-led,
              <span> responsible by design.</span>
            </h1>

            <p>
              DGMA Technics Limited supports professional international
              engagement through a structured approach that recognises
              compliance, due diligence, export-control and end-user
              verification requirements.
            </p>

            <Link to="/contact" className="compliance-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>

        {/* INTRO */}
        <section className="compliance-intro">
          <div className="compliance-container compliance-intro-grid">
            <div>
              <p className="compliance-label">Our Commitment</p>
              <h2>
                Professional engagement requires responsible processes.
              </h2>
            </div>

            <div className="compliance-intro-text">
              <p>
                DGMA Technics Limited understands that international business
                discussions in defence, aerospace, engineering and technology
                sectors may involve important legal, commercial and regulatory
                considerations.
              </p>

              <p>
                For this reason, our approach is designed to support structured
                communication, responsible information sharing and appropriate
                review before detailed discussions progress.
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="compliance-principles">
          <div className="compliance-container">
            <div className="compliance-section-heading">
              <p className="compliance-label">Compliance Principles</p>
              <h2>How DGMA approaches responsible engagement.</h2>
            </div>

            <div className="compliance-principles-grid">
              {principles.map((principle) => (
                <article className="compliance-principle-card" key={principle.number}>
                  <span className="principle-number">{principle.number}</span>
                  <div className="principle-line"></div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTICE */}
        <section className="compliance-notice-section">
          <div className="compliance-container compliance-notice-box">
            <div className="notice-symbol">!</div>

            <div className="notice-content">
              <p className="compliance-label">Important Notice</p>
              <h2>Public website information is intentionally high-level.</h2>

              <p>
                Product specifications, controlled technical data, commercial
                terms, pricing, manufacturing documentation and other detailed
                information are not published openly on this website.
              </p>

              <p>
                Such information may only be considered after the relevant
                enquiry, due diligence and compliance review process.
              </p>
            </div>
          </div>
        </section>

        {/* ENQUIRY PROCESS */}
        <section className="compliance-process">
          <div className="compliance-container">
            <div className="compliance-process-heading">
              <p className="compliance-label">Secure Enquiry Process</p>
              <h2>What happens after you contact DGMA.</h2>
            </div>

            <div className="compliance-process-grid">
              {enquirySteps.map((step) => (
                <article className="compliance-process-card" key={step.number}>
                  <span>{step.number}</span>
                  <div></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIBLE PARTNERSHIP */}
        <section className="compliance-partnership">
          <div className="compliance-container partnership-grid">
            <div className="partnership-mark">
              <span>DGMA</span>
              <small>Responsible Engagement</small>
            </div>

            <div className="partnership-content">
              <p className="compliance-label">For Qualified Partners</p>
              <h2>Clear communication. Proper process. Professional coordination.</h2>

              <p>
                DGMA welcomes enquiries from legitimate organisations seeking
                to explore relevant industrial, engineering, aerospace,
                maritime, communications or technology capabilities.
              </p>

              <p>
                To support a productive review, please provide accurate
                information about your organisation, intended project,
                requirement and relevant end-user context.
              </p>

              <Link to="/contact" className="compliance-primary-button">
                Submit Secure Enquiry <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="compliance-cta">
          <div className="compliance-cta-pattern"></div>

          <div className="compliance-container compliance-cta-content">
            <p className="compliance-label">Professional Enquiries Only</p>
            <h2>Start your conversation through the appropriate channel.</h2>

            <p>
              Submit a secure enquiry and DGMA will review the information
              provided before advising the appropriate next step.
            </p>

            <Link to="/contact" className="compliance-primary-button">
              Submit Secure Enquiry <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Compliance;