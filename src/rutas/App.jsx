import React from "react";
import Bienvenida from "../componentes/Bienvenida";
import Conoceme from "../componentes/Conoceme";
import Experiencias from "../componentes/Experiencias";
import Estudios from "../componentes/Estudios";
import Proyectos from "../componentes/Proyectos";
import Contacto from "../componentes/Contacto";
import Layout from "../componentes/Layout";
import "../assets/estilos/App.css";


import "../assets/estilos/App.css";

function App() {
  return (
    <Layout>
      <div className="contenedor-fondo">
        <div className="contenido-superior"></div>
        <div id="bienvenida" className="section">
          <Bienvenida />
        </div>
        <div id="conoceme" className="section">
          <Conoceme />
        </div>
        <div id="experiencias" className="section">
          <Experiencias />
        </div>
        <div id="estudios" className="section">
          <Estudios />
        </div>
        <div id="proyectos" className="section">
          <Proyectos />
        </div>
        <div id="contacto" className="section">
          <Contacto />
        </div>
      </div>
    </Layout>
  );
}

export default App;
