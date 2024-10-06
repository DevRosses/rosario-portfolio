import React from "react";
import Header from "./componentes/Header";
import Bienvenida from "./componentes/Bienvenida";
import Conoceme from "./componentes/Conoceme";
import Experiencias from "./componentes/Experiencias";
import Estudios from "./componentes/Estudios";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import "./assets/estilos/App.css";

function App() {

  
  return (
    <div className="app">
      <Header  />
      <main className="content">
        <Bienvenida />
        <Conoceme />
        <Experiencias />
        <Estudios />
        <Proyectos />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
