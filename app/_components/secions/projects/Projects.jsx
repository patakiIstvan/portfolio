import React from 'react';
import ProjectsClient from './ProjectClient';
import './projects.scss'

function Projects() {

  return (
    <section id="projects" className="projects section">
      <div className="section-title__container">
        <span className="section__subtitle">My portfolio</span>
        <h2 className="section__title">Recent works</h2>
      </div>
      <ProjectsClient />
    </section>);
}

export default Projects;