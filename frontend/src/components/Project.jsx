import React, { useState } from "react";

function Project({ el }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="project_container"
      key={el.id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h4>{el.title}</h4>
      <img src={el.image} alt={el.title} className="project_img" />
      <p>{el.description}</p>
      <div className="flex_no_wrap">
        {el.technologies.map((element) => (
          <p className="project_technologies">{element} </p>
        ))}
      </div>
      <div className={hover ? "project_buttons_container" : "hidden"}>
        <a href={el.github} target="_blank" rel="noreferrer">
          <button type="button" className="project_button">
            Voir le Code 🧑‍💻
          </button>
        </a>
        <a href={el.website} target="_blank" rel="noreferrer">
          <button type="button" className="project_button">
            Voir le site 🌐
          </button>
        </a>
      </div>
    </div>
  );
}

export default Project;
