import React from "react";
import projectData from "../data/projectData";
import Project from "./Project";

function Projects({ bgColor }) {
  return (
    <div className="projects_container">
      {projectData.map((el) => (
        <Project el={el} bgColor={bgColor} />
      ))}
    </div>
  );
}

export default Projects;
