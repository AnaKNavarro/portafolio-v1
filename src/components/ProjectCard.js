// components/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Asegúrate de crear un archivo CSS para este componente

function ProjectCard({ title, description, link }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
    );
}

export default ProjectCard;
