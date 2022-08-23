import React from "react";
import Seccion from "./Seccion";

const Secciones = () => {
  return (
    <nav>
      <ul>
        <Seccion nombre="Camino del entrenador" elemento="#CaminoEntrenador"/>
        <Seccion nombre="Kits Iniciales" elemento={"#KitsIniciales"}/>
        <Seccion nombre="Oferta Especial" elemento="#OfertaEspecial" />
      </ul>
    </nav>
  );
};

export default Secciones;