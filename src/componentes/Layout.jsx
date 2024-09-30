import NavBar from "../componentes/Navbar";
import "../assets/estilos/Layout.css";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <div className="layout-container">
        {children}
        <NavBar className="navbar-fijo"></NavBar>
      </div>
    </>
  );
}

export default Layout;
