import "./skills.css"

function Skills(){
    return (
        <section id="skills" className="skills-section">
            <h1 className="section-title autoDisplay">Design & Development</h1>

            <div className="skills-box">
                <img className="skills-image" src="/static/images/digital brain.png" alt="skills-image" />

                <div className="designer autoDisplay">
                    <h1 className="gradient">UI/UX Designer <i className='bx bx-laptop' ></i></h1>
                    <p>I create engaging, user-centric interfaces that blend aesthetic appeal with functionality. From developing responsive websites using WordPress and plugins like Elementor to implementing design language frameworks in React, my approach ensures that every visual element enhances usability and delivers a seamless experience.</p>
                </div>

                <div className="coder autoDisplay">
                    <h1 className="gradient">Software Developer <i className='bx bx-code-block' ></i></h1>
                    <p>I'm a passionate developer with proficiency in languages such as C, C++, Python, and JavaScript, and hands-on expertise in frameworks like FastAPI, Flask, Django, and React. My coding journey spans full-stack projects—from backend API solutions to dynamic front-end applications—driven by a commitment to clean, efficient, and scalable code.</p>
                </div>

                <div className="slider" reverse="true" style={{
                    "--width": "100px",
                    "--height": "100px",
                    "--quantity": 9
                }}>
                    <div className="list">
                        <div className="item" style={{"--position": 1}}><img src="/static/images/1.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 2}}><img src="/static/images/2.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 3}}><img src="/static/images/3.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 4}}><img src="/static/images/4.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 5}}><img src="/static/images/5.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 6}}><img src="/static/images/6.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 7}}><img src="/static/images/7.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 8}}><img src="/static/images/8.png" alt="slider-image" /></div>
                        <div className="item" style={{"--position": 9}}><img src="/static/images/logo.jpg" alt="slider-image" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;