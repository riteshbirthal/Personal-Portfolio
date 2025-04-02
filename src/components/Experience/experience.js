import "./experience.css"


function Experience() {
    return (
      <section id="experience" className="experience-info">
        <h1 className="experience-title">Professional Experience</h1>
        <div className="experience-cards">
          <div className="experience-card">
            <img src="/static/images/carelon_logo1.png" alt="Carelon Global Solutions Logo" />
            <div className="experience-detail">
              <div className="company-details">
                <h2>Carelon Global Solutions</h2>
                <h3>Jul'23 - Present</h3>
              </div>
              <h4>Software Engineer</h4>
              <ul>
                <li>
                  Developed and deployed user interfaces using React and a design language framework for seamless integration.
                </li>
                <li>
                  Enhanced backend functionality by implementing critical functions, comprehensive unit tests with Pytest, and extensive logging in FastAPI applications.
                </li>
                <li>
                  Architected and documented API solutions, designing high-level architecture and integrating Swagger-UI for Flask APIs.
                </li>
                <li>
                  Created and maintained a Flask application for data processing, using fuzzy matching to merge data from multiple Excel files while preserving history.
                </li>
                <li>
                  Built and deployed a full-stack solution using Streamlit, React, and FastAPI for a chatbot, integrating MongoDB for logging and error tracking.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-card">
            <img src="/static/images/TechWink_logo.webp" alt="TechWink Services Logo" />
            <div className="experience-detail">
              <div className="company-details">
                <h2>TechWink Services</h2>
                <h3>May'21 - Jul'21</h3>
              </div>
              <h4>Software Developer Intern</h4>
              <ul>
                <li>
                  Designed and developed responsive websites using WordPress and plugins such as Elementor, Dokan, and WooCommerce.
                </li>
                <li>
                  Utilized HTML, CSS, JavaScript, and PHP to enhance website functionality and implement secure payment solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;
  