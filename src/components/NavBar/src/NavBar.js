import React from "react";
import Logo from "./Logo";
import Secciones from "./Secciones";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Logo />
      <Secciones />
    </header>
  );
};

export default NavBar;