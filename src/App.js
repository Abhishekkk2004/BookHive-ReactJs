import "./App.css";
import React, { useState } from "react";

import First from "./components/first";
import Zero from "./components/zero";
import Second from "./components/second";
import Third from "./components/third";
import Fourth from "./components/fourth";
import Fifth from "./components/fifth";
import Contact from "./components/ContactSection";
function App() {
  const [stateFromFifth, setStateFromFifth] = useState(0);

  const updateStateFromFifth = (newValue) => {
    setStateFromFifth(newValue);
  };
  return (
    <div className="main">
      <Zero />
      <First value={stateFromFifth} />
      <Second />
      <Third />
      <Fourth />
      <Fifth
        value="Bestsellers"
        count="0"
        updateStateFromFifth={updateStateFromFifth}
      />
      <Fifth
        value="New Arivals"
        count="9"
        updateStateFromFifth={updateStateFromFifth}
      />
      <Fifth
        value="International Bestseller"
        count="18"
        updateStateFromFifth={updateStateFromFifth}
      />
      <Contact />
    </div>
  );
}

export default App;
