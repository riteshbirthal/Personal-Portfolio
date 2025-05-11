import "./skills.css"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Skills(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        pauseOnHove: true,
    };
    
    const skills_logos_list = [];

    for(let i = 1; i < 39; i++){
        skills_logos_list.push(`${process.env.PUBLIC_URL}/static/images/skills-logos/${i}.png`);
    }

    return (
        <section id="skills" className="skills-section">
            {/* <h1 className="section-title autoDisplay">Skills</h1> */}

            <div className="skills-box">
                <img className="skills-image" src={`${process.env.PUBLIC_URL}/static/images/digital brain.png`} alt="skills-image" />

                <div className="skills autoDisplay">
                    <h1 className="gradient">Tools & Technologies <i className='bx bx-laptop' ></i></h1>
                    <p> As a software engineer, I leverage a diverse set of tools and technologies to build efficient, scalable, and maintainable solutions. My toolkit spans various programming languages, frameworks, libraries, and utilities that help me deliver high-quality software across different domains—from web development to machine learning.
                        <ul>
                            <li>
                                <b>Programming Languages: </b> C, C++, Python, JavaScript, HTML, CSS, PHP, MATLAB, Fortran, SQL, Bash.
                            </li>
                            <li>
                                <b>Web Development: </b> React, Flask, FastAPI, Django, Node.js, Express.js, WordPress, Streamlit.
                            </li>
                            <li>
                                <b>Libraries & Frameworks:  </b> NumPy, Pandas, Matplotlib, Scipy, OpenCV, MongoDB, Pygame.
                            </li>
                            <li>
                                <b>Tools & Platforms: </b> Git, Docker, Jenkins, Postman, Swagger-UI, LaTeX, VS Code, Pytest.
                            </li>
                            <li>
                                <b>Other: </b> MongoDB, PostgreSQL, Fuzzy Matching Algorithms, RESTful APIs, WebSockets.
                            </li>
                        </ul>

                        I continuously explore new tools and stay updated with the latest technologies, ensuring that I am well-equipped to tackle diverse challenges in the software development field.

                        From full-stack web development to machine learning, these technologies enable me to build everything from interactive user interfaces to data-driven backend systems. I firmly believe in mastering these tools to not only build robust software but also deliver seamless, user-centered experiences.
                    </p>
                </div>

                <div className="coder autoDisplay">
                    <h1 className="gradient">My Coding Journey <i className='bx bx-code-block' ></i></h1>
                    <p>Every coder has their own unique journey, and mine has been shaped by passion, challenges, and growth. From my early exposure to programming to solving complex algorithms and building real-world applications, my coding journey has been both rewarding and transformative. Here's a snapshot of how I've evolved:
                    <ul>
                            <li>
                                <b>Foundations in Problem Solving: </b> I started with a strong focus on core Data Structures and Algorithms, which gave me the skills to solve complex problems.
                            </li>
                            <li>
                                <b>Consistent Growth Through Challenges: </b> With 300+ consecutive days on LeetCode and 150+ consecutive days on GFG, I've developed a habit of tackling new challenges daily, improving both my speed and understanding of algorithms.
                            </li>
                            <li>
                                <b>Github Repository:  </b>  I believe in sharing my learning, so I've been uploading my solutions on GitHub to document my progress and make it available to others.
                            </li>
                            <li>
                                <b>Building Projects: </b> My journey wasn't limited to solving problems; I've translated my learning into projects like ChitChat Live and a virtual mouse program in Python.
                            </li>
                            <li>
                                <b>Continuous Learning: </b> Whether it's completing Coursera courses on machine learning or diving into new technologies, I am always learning. I believe in evolving constantly and embracing new programming paradigms and tools.
                            </li>
                        </ul>
                        Through each challenge, I not only solve problems but also learn how to think critically, break down complex tasks, and persist in the face of difficulty. My journey is far from over, and I look forward to solving even more problems, learning new skills, and making meaningful contributions to the tech community.
                    </p>
                </div>

            </div>
            <Slider {...settings} className="slider">
                {skills_logos_list.map((logo, index) => (
                    <div className="slider-image" key={index}>
                        <img src={logo} alt={`Logo ${index}`} />
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Skills;