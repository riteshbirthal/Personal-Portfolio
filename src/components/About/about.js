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
            <h1 className="section-title autoDisplay">About</h1>
            <div className="info-container">
                <div className="col1">
                    <div className="card-img">
                        <img src="/static/images/Photo4.jpg" alt="Hi, I'm Ritesh Birthal - Full-Stack Developer" />
                    </div>

                    <div className="card">
                        <h2>Technical Skills</h2>
                        <p>I have extensive experience with a range of technologies across both front-end and back-end development. My primary technical skills include: C++, Python, JavaScript, React.js, FastAPI, Streamlit, MongoDB, etc.
                        </p>
                        <button onClick={() => scrollToSection('skills')}><i className='bx bx-send' ></i> For More Info Click Here...</button>
                    </div>


                    <div className="card">
                        <h2>Personal Attributes</h2>
                        <p>I'm a problem-solver by nature. I believe in the power of continuous learning and always seek to stay updated with the latest advancements in software development. I am detail-oriented and take pride in writing clean, well-documented code that is easy to maintain and scale.</p>
                        <p>In addition to my technical skills, I value collaboration and enjoy working with diverse teams to deliver the best possible solutions. I am open to feedback and constantly strive to improve my craft, whether through personal projects or professional experience.</p>
                    </div>
                </div>
                <div className="col2">
                    <div className="card">
                        <h2>Introduction</h2>
                        <p>I'm Ritesh Birthal, a passionate Full-Stack Developer with a deep interest in both front-end and back-end development. With a background in Physics from IIT Kanpur and experience at Carelon Global Solutions, I focus on creating high-performance, scalable, and user-friendly web applications. I thrive on solving complex problems and delivering high-quality solutions that align with user needs.</p>
                    </div>

                    <div className="card">
                        <h2>Education</h2>
                        <p>I hold a BS-MS dual degree in Physics from the Indian Institute of Technology Kanpur, where I gained a strong foundation in computational sciences, data structures, algorithms, and software engineering principles. My coursework in machine learning, image processing, and advanced numerical methods has been invaluable in tackling real-world problems.</p>
                    </div>

                    <div className="card">
                        <h2>Professional Experience</h2>
                        <ul>
                            <li>
                                <h3>Software Engineer | Carelon Global Solutions</h3>
                                <h4>July 2023 - Present</h4>
                                <p>At Carelon Global Solutions, I have had the privilege to work on several high-impact projects. I developed full-stack applications using React and FastAPI, built real-time systems, and worked on data processing solutions to merge data from multiple sources. Notably, I contributed to the development of a chatbot and a real-time web chat application that improved user interaction for multiple clients.</p>
                                <p>My role required a mix of strong front-end skills for seamless user interactions and back-end development to handle data processing and API development. I've worked with teams to design clear and efficient architecture, with an emphasis on performance, security, and maintainability.</p>
                            </li>
                            <li>
                                <h3>Software Developer Intern | Techwink Services</h3>
                                <h4>May 2021 - July 2021</h4>
                                <p>During my internship at Techwink Services, I demonstrated my proficiency in front-end development by designing and developing responsive websites using WordPress. I worked extensively with WordPress plugins such as Elementor, Dokan, and WooCommerce to create user-friendly e-commerce sites and business platforms.</p>
                                <p>In addition to the front-end work, I utilized HTML, CSS, JavaScript, and PHP to enhance website functionality and integrate secure payment systems for seamless online transactions. This internship helped me build a strong foundation in full-stack development and provided valuable insights into client-facing projects.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;