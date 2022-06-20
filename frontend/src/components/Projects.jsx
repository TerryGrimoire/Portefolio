import React from "react";
import projectData from "../data/projectData";
import Project from "./Project";

function Projects({ bgColor }) {
  return (
    <section className="projects_container">
      {projectData.map((el) => (
        <Project el={el} bgColor={bgColor} />
      ))}
    </section>
  );
}

export default Projects;
