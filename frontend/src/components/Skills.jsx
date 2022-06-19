import React from "react";
import skillsData from "../data/skillsData";

function Skills() {
  return (
    <div className="basic_flex">
      {skillsData.map((el) => (
        <div className="skill_container">
          <img src={el.image} alt={el.title} className="logo_skills" />
          <p> {el.title} </p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
