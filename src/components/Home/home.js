import "./home.css"


function Home(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id="home" className="home-container">
            <div className="home">
                <div className="home-info autoBlur">
                    <div className="home-info-title">
                        <i className='bx bxl-sketch' ></i> Full-Stack Developer Portfolio
                    </div>
                    <h1>Delivering <span className="gradient">Innovative</span> Solutions and <span className="gradient">Exceptional User Experiences</span></h1>
    
                    <p>Hi, I'm Ritesh Birthal, a Full-Stack Developer with a deep passion for building user-centric applications. With experience in front-end and back-end development, I specialize in React, FastAPI, Flask, and Python to create robust, scalable solutions. From developing real-time web applications to building secure backends, I am dedicated to delivering high-quality products.</p>
                    
                    <p>Having worked in various industries, including at Carelon Global Solutions, I have contributed to key projects that involve data processing, API development, and the implementation of complex features in diverse environments. My commitment to continuous learning drives me to stay updated with the latest technologies and best practices.</p>
    
                    <button onClick={() => scrollToSection('contact')}><i className='bx bx-send' ></i> Contact Me</button>
                </div>
    
                <div className="home-img-box">
                    <img src="/static/images/home-vid.gif" alt="home-image" />
                </div>
            </div>
            <a href="#about"><div className="scroll-down"></div></a>
        </section>
    );
}

export default Home;