import "../assets/estilos/Header.css"

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#bienvenida"> DevRosses </a>
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
