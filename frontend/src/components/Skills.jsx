import React, { useState } from "react";
import skillsData from "../data/skillsData";

function Skills() {
  const [skills, setSkills] = useState("hard");

  return (
    <div className="section_container">
      <h2>Skills</h2>
      <button
        type="button"
        className={
          skills === "hard" ? "button_style2 selected" : "button_style2"
        }
        onClick={() => setSkills("hard")}
      >
        Hard Skills
      </button>
      <button
        type="button"
        className={
          skills === "soft" ? "button_style2 selected" : "button_style2"
        }
        onClick={() => setSkills("soft")}
      >
        Soft Skills
      </button>
      <div className="basic_flex">
        {skillsData
          .filter((el) => el.type === skills)
          .map((el) => (
            <div className="skill_container">
              <img src={el.image} alt={el.title} className="logo_skills" />
              <p> {el.title} </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Skills;
