import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>HOME</h1>
        </Link>
        <div className="contentButtons">
          <h2>INGRESA</h2>
          <button>SUSCRIBETE AHORA</button>
        </div>
      </nav>
    </div>
  );
}
