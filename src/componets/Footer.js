import React from "react";
import "../styles/Footer.css";
import facebookLogo from "../images/icon-facebook.svg";
import instagramLogo from "../images/icon-instagram.svg";
import twitterLogo from "../images/icon-twitter.svg";

export default function Footer() {
  return (
    <div className="contentFooter">
      <h1>
        ¡Diviértete en nuestro sitio oficial con los mejores episodios completos
        de tus serie favorita!
      </h1>
      <div className="contentIcons">
        <img src={facebookLogo} alt="logoFb" />
        <img src={instagramLogo} alt="logoIg" />
        <img src={twitterLogo} alt="logoTw" />
      </div>
    </div>
  );
}
