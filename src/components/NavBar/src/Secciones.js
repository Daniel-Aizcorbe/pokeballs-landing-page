import React from "react";
import Seccion from "./Seccion";
import "../styles/Secciones.css";

const Secciones = () => {
  return (
    <nav className="nav-secciones">
      <ul className="list-secciones">
        <Seccion nombre="Camino del entrenador" elemento="#CaminoEntrenador"/>
        <Seccion nombre="Kits Iniciales" elemento={"#KitsIniciales"}/>
        <Seccion nombre="Oferta Especial" elemento="#OfertaEspecial" />
      </ul>
    </nav>
  );
};

export default Secciones;