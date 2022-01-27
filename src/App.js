import React from "react";
import { Routes, Route } from "react-router";
import NavBar from "../src/componets/NavBar";
import Home from "../src/componets/Home";
import Characters from "../src/componets/Characters";
import Episodes from "../src/componets/Episodes";
import "../src/styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/characters" exact element={<Characters />} />
        <Route path="/episodes" exact element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
