import React from "react";
import { Routes, Route } from "react-router";
import Home from "../src/componets/Home";
import Characters from "../src/componets/Characters";
import Episodes from "../src/componets/Episodes";
import "../src/styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/characters" exact element={<Characters />} />
        <Route path="/episodes" exact element={<Episodes />} />
        <Route
          path={process.env.PUBLIC_URL + "/episodes"}
          component={<Episodes />}
        />
      </Routes>
    </div>
  );
}

export default App;
