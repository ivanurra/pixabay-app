import React, { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();

    // Validación
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    // Enviar el término de búsqueda hacia el componente principal
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-9">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Find a image"
            onChange={(e) => guardarTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="GO"
          />
        </div>
      </div>

      {error ? <Error mensaje="Debes agregar un término de búsqueda." /> : null}
    </form>
  );
};

export default Formulario;
