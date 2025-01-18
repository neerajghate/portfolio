// Skills.js
import React from 'react';

function Skills() {
  const skills = {
    Languages: ['Python', 'JavaScript', 'C', 'C++', 'Java', 'HTML', 'CSS'],
    Tools: ['Git', 'Postman', 'Docker', 'Kubernetes', 'VS Code'],
    Databases: ['MySQL', 'MongoDB', 'DynamoDB'],
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      {Object.keys(skills).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {skills[category].map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
