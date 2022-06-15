import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Header from "../components/header";
import AboutMe from "../components/AboutMe";
import arrow from "../assets/arrow.png";

import "../App.css";

export default function Home() {
  const [bgColor, setBgColor] = useState("container");

  return (
    <main className={bgColor}>
      <section>
        <Header setBgColor={setBgColor} />
        <HashLink to="#About">
          <button type="button" className="no_button">
            <img src={arrow} alt="arrow" className="arrow_button" />
          </button>
        </HashLink>
      </section>
      <section>
        <AboutMe />
      </section>
    </main>
  );
}
