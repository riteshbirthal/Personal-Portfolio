import "./projects.css"
import projects_list from "./projects_data";
import ProjectCard from "./project_card";


function Projects(){

    return (
        <section id="projects" className="my-projects">
            <h1 className="section-title autoDisplay">Projects 💻</h1>
            <p className="projects-intro">I believe that personal projects are essential for honing technical skills, experimenting with new ideas, and solving unique challenges. Below are some of the personal projects I've worked on, each showcasing my ability to apply various technologies to create practical solutions.</p>

            <div className="project-cards">
                {
                    projects_list.map((item) => {
                    return (<ProjectCard image={item[0]} name={item[1]} techs_used={item[2]} overview={item[3]} features={item[4]} impacts={item[5]} project_link={item[6]} />);
                    })
                }
            </div>
        </section>
    );
}

export default Projects;