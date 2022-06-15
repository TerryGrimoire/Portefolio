import React, { useState } from "react";
import Header from "../components/header";

import "../App.css";

export default function Home() {
  const [bgColor, setBgColor] = useState("container");

  return (
    <main className={bgColor}>
      <Header setBgColor={setBgColor} />
    </main>
  );
}
