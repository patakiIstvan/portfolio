import React, { useState, useEffect } from 'react';
// import projectData from '../../projects';
// import Project from '../Project/Project';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

function Projects() {

  // const [filteredProjects, setFilteredProjects] = useState(projectData)
  // let [projectType, setProjectType] = useState("all")

  // useEffect(() => {
  //   if (projectType === "all") {
  //     setFilteredProjects(projectData);
  //     return;
  //   }
  //   const filtered = projectData.filter(pr =>
  //     pr.category.includes(projectType)
  //   );
  //   setFilteredProjects(filtered)
  // }, [projectType])

  return (
    <section id="projects" className="projects section">
      <div className="section-title__container">
        <span className="section__subtitle">My portfolio</span>
        <h2 className="section__title">Recent works</h2>
      </div>
      <div className="filters">
        <span className={projectType === "all" ? "filter__item filter__active" : "filter__item"} onClick={() => setProjectType("all")}>All website</span>
        <span className={projectType === "notmydesign" ? "filter__item filter__active" : "filter__item"} onClick={() => setProjectType("notmydesign")}>Followed design</span>
        <span className={projectType === "mydesign" ? "filter__item filter__active" : "filter__item"} onClick={() => setProjectType("mydesign")}>Own design</span>
      </div>
      {/* <motion.div Layout className="project__container">
        <AnimatePresence>
          {filteredProjects.map((project, i) => {
            return (<Project
              key={i}
              title={project.title}
              desc={project.desc}
              github={project.github}
              pic={project.pic}
              tech={project.tech}
            />);
          })}
        </AnimatePresence>
      </motion.div> */}
    </section>);
}

export default Projects;