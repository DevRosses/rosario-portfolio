import "../assets/estilos/Header.css"
import User from "../assets/estaticos/User.jpg"
import React, { useState } from "react";

function Header() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
    console.log('funciona el click')
    console.log("el menu esta: ", setMenuAbierto );
  };

  return (
    <>
      <header className="header">
        <div
          className={`logo ${menuAbierto ? "hide-logo" : ""}`}
          onClick={toggleMenu}>
          <img src={User} alt="User" />
        </div>

        <nav className={`nav ${menuAbierto ? "open" : ""}`}>
          {menuAbierto && (
            <span className="close-btn" onClick={toggleMenu}>
              X
            </span>
          )}
          <ul>
            <li>
              <a href="#bienvenida" className="bienvenida">
                {" "}
                DevRosses{" "}
              </a>
            </li>
            <li>
              <a href="#conoceme"> Conoceme </a>
            </li>
            <li>
              <a href="#experiencias"> Experiencia </a>
            </li>
            <li>
              <a href="#estudios"> Estudio </a>
            </li>
            <li>
              <a href="#proyectos"> Proyecto </a>
            </li>
            <li>
              <a href="#contacto"> Contacto </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
