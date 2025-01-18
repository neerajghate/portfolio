// Projects.js
import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Human Fall Detection',
            description: '2D ConvNet system for MHI classification, achieving 98% accuracy.',
            technologies: ['Python', 'OpenCV', 'Keras'],
            link: 'https://github.com/neerajghate/fall-detection',
        },
        {
            title: 'Customer Segmentation',
            description: 'K-means clustering to analyze customer spending patterns.',
            technologies: ['Python', 'Matplotlib', 'Scikit-learn'],
            link: 'https://github.com/neerajghate/customer-segmentation',
        },
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Technologies: {project.technologies.join(', ')}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );
}

export default Projects;
