import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";

function App() {
  // State de la app
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      // API KEY
      const key = process.env.REACT_APP_KEY;
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarBusqueda(resultado);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Find your image. Type a word.</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
    </div>
  );
}

export default App;
