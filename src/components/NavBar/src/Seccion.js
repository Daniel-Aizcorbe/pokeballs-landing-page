import React from "react";
import "../styles/Secciones.css";

const Seccion = ({ nombre, elemento }) => {

  return (
    <li className="contenedor-seccion">
      <a href={elemento} className="seccion">
        {nombre}
      </a>
    </li>
  );
};

export default Seccion;