import React, { useState } from 'react';
import './project_card.css';

const ProjectCard = ({ image, name, techs_used, overview, features, impacts, project_link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`project-card ${isExpanded ? 'expanded' : ''} `}>
            <img src={`${image}`} alt="Project" />

            <h2>{name}</h2>
            <p><b>Technologies Used:</b> {techs_used}</p>
            <div className="project-overview">
                <h3>Project Overview:</h3>
                <p>{overview}</p>
            </div>
            <button className="expand-button" onClick={toggleExpand}>
                    {isExpanded ? 'Collapse' : 'Expand'}
            </button>
            {isExpanded && (
                <>
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
                <a href={`${project_link}`}>Project Link</a>
                </>
            )}
        </div>
    );
};

export default ProjectCard;