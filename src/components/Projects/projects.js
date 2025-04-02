import "./projects.css"


function Projects(){
    return (
        <section id="projects" className="my-projects">
            <h1 className="section-title autoDisplay">Projects 💻</h1>
            <div className="project-cards">
                <div className="project-card">
                    <div className="project-vidbox autoBlur">
                        <video id="projectVideo1" src="/static/videos/project1.mp4" type="video/mp4"></video>
                        <div className="hover-sign"></div>
                    </div>

                    <div class="project-info fadeInRight">
                        <h1><span className="gradient">Sudoku Solver</span></h1>

                        <p>Developed a Sudoku solver with a user interface and RESTful API using HTML, CSS, JavaScript, Node.js, and Express.js</p>

                        <button><i className='bx bx-link-external' ></i> Website</button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-vidbox autoBlur">
                        <video id="projectVideo2" src="/static/videos/project2.mp4" type="video/mp4"></video>
                    </div>

                    <div className="project-info fadeInRight">
                        <h1>Modern <span className="gradient">Portfolio</span> Website</h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam sapiente ea repudiandae numquam at non unde culpa earum consequatur.</p>

                        <button><i className='bx bx-link-external' ></i> Website</button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-vidbox autoBlur">
                        <video id="projectVideo3" src="/static/videos/project3.mp4" type="video/mp4"></video>
                    </div>

                    <div className="project-info fadeInRight">
                        <h1><span className="gradient">Chatbot</span></h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam sapiente ea repudiandae numquam at non unde culpa earum consequatur.</p>

                        <button><i className='bx bx-link-external' ></i> Website</button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-vidbox autoBlur">
                        <video id="projectVideo1" src="/static/videos/project1.mp4" type="video/mp4"></video>
                        <div className="hover-sign"></div>
                    </div>

                    <div class="project-info fadeInRight">
                        <h1><span className="gradient">Sudoku Solver</span> Website</h1>

                        <p>Developed a Sudoku solver with a user interface and RESTful API using HTML, CSS, JavaScript, Node.js, and Express.js</p>

                        <button><i className='bx bx-link-external' ></i> Website</button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-vidbox autoBlur">
                        <video id="projectVideo2" src="/static/videos/project2.mp4" type="video/mp4"></video>
                    </div>

                    <div className="project-info fadeInRight">
                        <h1>Modern <span className="gradient">Portfolio</span> Website</h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam sapiente ea repudiandae numquam at non unde culpa earum consequatur.</p>

                        <button><i className='bx bx-link-external' ></i> Website</button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-vidbox autoBlur">
                        <video id="projectVideo3" src="/static/videos/project3.mp4" type="video/mp4"></video>
                    </div>

                    <div className="project-info fadeInRight">
                        <h1><span className="gradient">Chatbot</span></h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam sapiente ea repudiandae numquam at non unde culpa earum consequatur.</p>

                        <button><i className='bx bx-link-external' ></i> Website</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;