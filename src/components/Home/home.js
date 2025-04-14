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
                    <h1>Building <span className="gradient">Scalable</span> and   <span className="gradient">User-Centric Web Applications</span></h1>
    
                    <p>Hi, I'm Ritesh Birthal, a Full-Stack Developer with a passion for creating dynamic, user-centric web applications. I specialize in building end-to-end solutions with modern technologies like React, FastAPI, Flask, and Python. My expertise spans both front-end and back-end development, and I'm dedicated to crafting seamless user experiences and high-performing systems.</p>
                    
                    <p>Having worked in various industries, including at Carelon Global Solutions, I have contributed to key projects that involve data processing, API development, and the implementation of complex features in diverse environments. I take pride in writing clean, maintainable code and solving complex problems while staying updated with the latest tech trends and best practices. My commitment to continuous learning drives me to stay updated with the latest technologies and best practices.</p>
    
                    <button onClick={() => scrollToSection('contact')}><i className='bx bx-send' ></i> Contact Me</button>
                </div>
    
                <div className="home-img-box">
                    <img src={`${process.env.PUBLIC_URL}/static/images/Photo3.jpg`} alt="Hi, I'm Ritesh Birthal - Full-Stack Developer" />
                </div>
            </div>
            {/* <a href="#about"><div className="scroll-down"></div></a> */}
        </section>
    );
}

export default Home;