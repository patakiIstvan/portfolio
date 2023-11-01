"use client"
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectData } from '@/app/_utils/dummy_data';
import ProjectCard from '../../ui/projectCard/ProjectCard';

const ProjectsClient = () => {

  const [filteredProjects, setFilteredProjects] = useState(projectData)
  let [projectType, setProjectType] = useState("new")

  useEffect(() => {
    if (projectType === "all") {
      setFilteredProjects(projectData);
      return;
    }
    const filtered = projectData.filter(pr =>
      pr.category.includes(projectType)
    );
    setFilteredProjects(filtered)
  }, [projectType])

  return (
    <>
      <div className="filters">
        <span className={projectType === "all" ? "filter__item filter__active" : "filter__item"} onClick={() => setProjectType("all")}>All</span>
        <span className={projectType === "new" ? "filter__item filter__active" : "filter__item"} onClick={() => setProjectType("new")}>New</span>
        <span className={projectType === "old" ? "filter__item filter__active" : "filter__item"} onClick={() => setProjectType("old")}>Old</span>
      </div>
      <motion.div Layout className="project__container">
        <AnimatePresence>
          {filteredProjects.map((project, i) => {
            return (<ProjectCard
              key={i}
              title={project.title}
              desc={project.desc}
              github={project.github}
              pic={project.pic}
              tech={project.tech}
            />);
          })}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default ProjectsClient