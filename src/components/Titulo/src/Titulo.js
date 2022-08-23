import React from "react";
import "../styles/Titulo.css";

const Titulo = () => {

  return (
    <div className="contenedor-titulo">
      <h1>
        ¿Estas pensando en iniciar como entrenador Pokemon?
      </h1>
      <div className="contenedor-descripcion">
        <p>
          ¡Suscribite para no perderte ninguna novedad del mundo pokemon!
        </p>
      </div>
    </div>
  );
};

export default Titulo;