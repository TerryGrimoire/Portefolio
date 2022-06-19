import React from "react";
import terry from "../assets/terry.png";

function AboutMe() {
  return (
    <div id="About" className="section_container2">
      <h3>Terry Grimoire</h3>
      <div className="basic_flex">
        <img src={terry} alt="terry" className="img_medium_size" />
        <p>
          For more than five years,I have been working in the financial sector.
          From traditional organizations to new players;I know the ways and
          practices of traditional banks and have experienced the excitement and
          intensity of expanding fintechs. Holder of a master's degree in
          banking and financial careers,I acknowledge finances, accounting,
          compliance,risk management, financial analyzes, banking, and financial
          products, etc.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
