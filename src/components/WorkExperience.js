// WorkExperience.js
import React from 'react';

function WorkExperience() {
    const experiences = [
        {
            role: 'Software Developer',
            company: 'RealThingks GmbH',
            duration: 'July 2022 – July 2023',
            achievements: [
                'Automated testing processes with Python.',
                'Integrated CI/CD pipelines with Docker and Kubernetes.',
                'Reduced bugs by 40% through code reviews.',
            ],
        },
        {
            role: 'Data Engineering Intern',
            company: 'Clairvoyant',
            duration: 'August 2021 – September 2021',
            achievements: [
                'Processed large datasets using Hadoop and Spark.',
                'Developed real-time dashboards with Python and Scala.',
            ],
        },
    ];

    return (
        <div className="work-experience">
            <h2>Work Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.role} at {exp.company}</h3>
                    <p>{exp.duration}</p>
                    <ul>
                        {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default WorkExperience;
