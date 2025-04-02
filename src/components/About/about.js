import "./about.css"


function About(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id="about" className="info-section">
            <h1 className="section-title autoDisplay">Professional Profile</h1>
            <div className="info-cards">
                <div className="card">
                    <img src="/static/images/grid1.png" alt="card-image" />
                    <h1>About Me</h1>
                    <p>I'm Ritesh Birthal, an Associate Software Engineer III with Carelon Global Solutions. I craft robust, user-centric solutions by seamlessly integrating innovative design with efficient back-end functionality. My diverse project experience—from full-stack web apps to algorithm-driven utilities—reflects a commitment to quality and continuous learning.</p>

                </div>

                <div className="card">
                    <img src="static/images/grid2.png" alt="card-image" />
                    <h1>Skills & Technologies</h1>
                    <p>I work with a versatile tech stack including:
                        <ul>
                            <li>Programming Languages: Python, C, C++, JavaScript, PHP, SQL</li>
                            <li>Frameworks & Libraries: React, Node.js, Express, FastAPI, Flask, Django, Streamlit, NumPy, Pandas, OpenCV</li>
                            <li>Front-End Tools: HTML, CSS, WordPress, and various design frameworks</li>
                        </ul>
                        </p>

                </div>

                <div className="card">
                    <video autoPlay loop muted playsInline src="/static/videos/glob.mp4" type="video/mp4"></video>
                    <h1>Remote Collaboration & Global Flexibility</h1>
                    <p>I excel in dynamic, distributed work environments. Highly adaptable across time zones and locations, I ensure seamless communication and effective collaboration with teams worldwide. This flexibility allows me to contribute effectively no matter where the project is based.</p>

                    <button onClick={() => scrollToSection('contact')}><i className='bx bx-link-external' ></i> Contact Me</button>
                </div>

                <div className="card">
                    <img src="/static/images/grid4.png" alt="card-image" />
                    <h1>My Coding Journey</h1>
                    <p>Coding is not just my profession—it's my passion. I thrive on solving complex challenges, as evidenced by my 900+ solved LeetCode problems and a track record of impactful projects. I continually push myself to learn and innovate, making every project an opportunity to enhance my technical expertise. </p>

                </div>
            </div>
        </section>
    );
}

export default About;