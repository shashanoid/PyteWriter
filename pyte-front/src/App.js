import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomeScreen  from "./screens/HomeScreen.js";

function App() {
  return (
    <div className="d-flex" id="app-wrapper">
      <HomeScreen />
    </div>
  );
}

export default App;
