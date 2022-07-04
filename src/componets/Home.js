import React from "react";
import Header from "../componets/Header";
import Body from "../componets/Body";
import Footer from "../componets/Footer";
import NavBar from "../componets/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
