import React, { useState } from 'react';
import './project_card.css';

const ProjectCard = ({ image, name, techs_used, overview, features, impacts, project_link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`project-card ${isExpanded ? 'expanded' : 'collapsed'} `}>
            <div className={`project-image ${isExpanded ? 'expanded' : 'collapsed'} `}>
                <img src={`${image}`} alt="Project" />
            </div>
            <div className={`project-details ${isExpanded ? 'expanded' : 'collapsed'} `}>
                <h2>{name}</h2>
                {/* <p><b>Technologies Used:</b> {techs_used}</p>
                <div className="project-overview">
                    <h3>Project Overview:</h3>
                    <p>{overview}</p>
                </div> */}
                <div className={`toggle-button ${isExpanded ? 'expanded' : 'collapsed'} `}>
                    <button className="expand-button" onClick={toggleExpand}>
                            Expand
                    </button>
                </div>
                {isExpanded && (
                    <>
                        <div className={`close-button ${isExpanded ? 'expanded' : 'collapsed'} `} onClick={toggleExpand}>
                            <i className='bx bx-x' ></i>
                        </div>
                        <div className="project-features">
                            <h3>Features/Functionality:</h3>
                            <ul>
                                {features.map((item) => {
                                    return (<li>{item}</li>);
                                })}
                            </ul>
                        </div>
                        <div className="project-impact">
                            <h3>Impact/Outcome:</h3>
                            <ul>
                                {impacts.map((item) => {
                                    return (<li>{item}</li>);
                                })}
                            </ul>
                        </div>
                        <button className='project-link-button'>
                            <a href={`${project_link}`}>Project Link</a>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;