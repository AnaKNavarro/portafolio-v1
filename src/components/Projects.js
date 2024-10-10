import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
    { title: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { title: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
];

function Projects() {
    return (
        <section id="projects">
            <h2>Proyectos</h2>
            {projects.map((project, index) => (
                <ProjectItem key={index} title={project.title} description={project.description} />
            ))}
        </section>
    );
}

export default Projects;
