import React from "react";
import { Link } from "react-router-dom";
import "../styles/Body.css";
import imgBody from "../images/Rick-and-Morty_S4-box-art-2020-featured.jpeg";
import imgCategory1 from "../images/rick-and-morty-1604562846.jpeg";
import imgCategory2 from "../images/rickmorty_1200x800.jpeg";


export default function Body() {
  return (
    <div className="contentBody">
      <img src={imgBody} alt="" />
      <div className="contentCategories">
        <div className="category1">
          <img src={imgCategory1} alt="imageCategories" />
        </div>

        <div className="category1">
          <img src={imgCategory2} alt="" />
        </div>
      </div>
      <div className="contentButtons2">
        <Link to="/characters">
          <button>CHARACTERS</button>
        </Link>
        <Link to="/episodes">
        <button>EPISODES</button>
        </Link>
      </div>
    </div>
  );
}
