// Certifications.js
import React from 'react';

function Certifications() {
    const certifications = [
        { name: 'Front End Web Development with React', issuer: 'HKUST' },
        { name: 'Neural Networks and Deep Learning', issuer: 'DeepLearning.AI' },
    ];

    return (
        <div className="certifications">
            <h2>Certifications</h2>
            <ul>
                {certifications.map((cert, index) => (
                    <li key={index}>{cert.name} - {cert.issuer}</li>
                ))}
            </ul>
        </div>
    );
}

export default Certifications;
