// ProjectCard.js (güncellenmiş - GitHub logosu eklendi)
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, language, repoLink, year, endDate }) => {
    const techStack = language.split(',').map(tech => tech.trim());

    return (
        <div className="timeline-item">
            <div className="timeline-year">{year}</div>
            <div className="card">
                <div className="card-header">
                    <h3>{title}</h3>
                    <div className="card-date">{endDate && endDate !== year ? `${year} - ${endDate}` : year}</div>
                </div>
                <p className="card-description">{description}</p>
                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <span className="tech-pill" key={index}>{tech}</span>
                    ))}
                </div>
                <div className="card-footer">
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="repo-link"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="white"
                                style={{ marginRight: '8px', verticalAlign: 'middle' }}
                            >
                                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.048.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.814 1.102.814 2.222v3.293c0 .322.217.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
