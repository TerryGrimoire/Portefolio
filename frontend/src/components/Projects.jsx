import React from "react";
import projectData from "../data/projectData";

function Projects() {
  return (
    <div>
      {projectData.map((el) => (
        <div>
          <img src={el.image} alt={el.title} />
          <h4>{el.title}</h4>
          <p>{el.description}</p>
          {el.technologies.map((element) => (
            <p className="project_technologies">{element} </p>
          ))}
          <div className="Project_buttons_container">
            <a href={el.github} target="_blank" rel="noreferrer">
              <button type="button">Voir le Code</button>{" "}
            </a>
            <a href={el.website} target="_blank" rel="noreferrer">
              <button type="button">Voir le site</button>{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
