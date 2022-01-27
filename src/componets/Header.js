import React from "react";
import "../styles/Header.css";
import imageTitle from "../images/Rick_and_Morty_-_logo_(English).png";

export default function Header() {
  return (
    <div>
      <div className="contentTitle">
        <img src={imageTitle} alt="imageTitle" />
      </div>
    </div>
  );
}
