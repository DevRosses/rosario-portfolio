import "../assets/estilos/Header.css";
import User from "../assets/estaticos/User.jpg";
import React, { useState } from "react";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
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
              <a href="#bienvenida" className="bienvenida" onClick={toggleMenu}>
                DevRosses
              </a>
            </li>
            <li>
              <a href="#conoceme" onClick={toggleMenu}>
                Conóceme
              </a>
            </li>
            <li>
              <a href="#experiencias" onClick={toggleMenu}>
                Experiencia
              </a>
            </li>
            <li>
              <a href="#estudios" onClick={toggleMenu}>
                Estudio
              </a>
            </li>
            <li>
              <a href="#proyectos" onClick={toggleMenu}>
                Proyecto
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
