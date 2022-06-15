import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import arrow from "../assets/arrow.png";
import "../App.css";

export default function Header({ setBgColor }) {
  const [good, setGood] = useState(false);
  const [bad, setBad] = useState(false);

  const handleClick = (setYes, setNo) => {
    setNo(false);
    setYes(true);
  };

  useEffect(() => {
    if (good) {
      setBgColor("good");
    } else if (bad) {
      setBgColor("bad");
    } else {
      setBgColor("container");
    }
  }, [good, bad]);

  return (
    <header>
      <section className="welcome_section">
        <h1> Welcome to my Grimoire !</h1>
        <h2>Are you a good witch or a bad witch ?</h2>
      </section>

      <div className="buttons_container">
        <button
          className="button_style white"
          type="button"
          onClick={() => handleClick(setGood, setBad)}
        >
          Good Witch
        </button>
        <button
          className="button_style black"
          type="button"
          onClick={() => handleClick(setBad, setGood)}
        >
          Bad Witch
        </button>
      </div>
      {good || bad ? (
        <HashLink to="#About_me">
          <button type="button" className="no_button">
            <img src={arrow} alt="arrow" className="arrow_button" />
          </button>
        </HashLink>
      ) : (
        ""
      )}
    </header>
  );
}
