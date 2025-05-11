import "./experience.css"


function Experience() {
    return (
      <section id="experience" className="experience-info">
        {/* <h1 className="experience-title">Professional Experience</h1> */}
        <p className="experience-intro">Over the years, I've had the opportunity to work with various teams on complex, challenging, and rewarding projects. Below is a summary of my professional experience, which highlights the roles I have taken on and the impact I've made in full-stack development, real-time systems, data processing, and API development.</p>
        <div className="experience-details">
          <div className="exp-card">
              <div className="job-meta-data">
                <div className="company-logo">
                  <img  src={`${process.env.PUBLIC_URL}/static/images/carelon_logo1.png`} alt="Carelon Global Solutions" />
                </div>
                <div>
                  <h2>Software Engineer | Carelon Global Solutions</h2>
                  <h3>July 2023 - Present</h3>
                  <h3>Location: Gurgaon</h3>
                </div>
              </div>
              <h3>Key Responsibilities:</h3>
              <ul>
                <li><b>Full-Stack Development:</b> Lead the design and implementation of full-stack applications using React.js for front-end and FastAPI for back-end. Developed responsive, interactive, and intuitive user interfaces while ensuring seamless communication with back-end services.</li>
                <li><b>API Development & Optimization:</b> Developed and optimized RESTful APIs using FastAPI and Flask, improving application performance and scalability. I focused on building secure, efficient, and easily maintainable APIs.</li>
                <li><b>Data Processing Solutions:</b> Designed and implemented solutions for merging and processing data from multiple sources using Flask and Python. Applied fuzzy matching and other algorithms for data consistency, improving the efficiency of internal operations.</li>
                <li><b>Team Collaboration:</b> Worked closely with cross-functional teams, including product managers, designers, and other developers, to ensure the alignment of features with business goals and user needs. Led several agile sprints, ensuring the timely delivery of features with high code quality.</li>
                <li><b>Code Quality & Testing:</b> Wrote comprehensive unit tests using Pytest and integrated CI/CD pipelines to automate testing and deployment. I also ensured code maintainability through continuous refactoring and by following best practices for clean code.</li>
              </ul>

              <h3>Key Achievements:</h3>
              <ul>
                <li><b>Enhanced System Performance:</b> Improved the backend system's performance by 20% by optimizing database queries and implementing asynchronous processing.</li>
                <li><b>Team Leadership:</b> Recognized for my leadership on a major project, resulting in a successful delivery ahead of schedule while maintaining a high-quality codebase.</li>
              </ul>
          </div>
          <div className="exp-card">
              <div className="job-meta-data">
                <div className="company-logo">
                  <img src={`${process.env.PUBLIC_URL}/static/images/TechWink_logo.jpg`} alt="Techwink Services" />
                </div>
                <div>
                  <h2>Software Developer Intern | Techwink Services</h2>
                  <h3>May 2021 - July 2021</h3>
                  <h3>Location: Work From Home</h3>
                </div>
              </div>
              <h3>Key Responsibilities:</h3>
              <ul>
                <li><b>Front-End Development:</b> Designed and developed responsive websites using WordPress and custom themes. Implemented plugins such as Elementor, Dokan, and WooCommerce to enable enhanced website functionality and e-commerce capabilities.</li>
                <li><b>Web Optimization:</b> Applied HTML, CSS, JavaScript, and PHP to optimize websites, improving load time and performance.</li>
                <li><b>Payment Integration:</b> Worked on integrating secure payment gateways and ensuring compliance with industry standards for e-commerce platforms. This was crucial for ensuring safe and seamless transactions for customers.</li>
                <li><b>UI/UX Collaboration:</b> Worked closely with the UI/UX design team to implement modern, clean, and user-friendly interfaces, leading to improved user engagement and satisfaction.</li>
              </ul>

              <h3>Key Achievements:</h3>
              <ul>
                <li><b>Client Satisfaction:</b> Contributed to the development of an e-commerce website that resulted in a 20% increase in sales within the first three months post-launch.</li>
                <li><b>Optimized Web Functionality:</b> Played a key role in improving the website's functionality and user experience, which led to a 15% reduction in bounce rates and a 30% increase in user interaction.</li>
              </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;
  