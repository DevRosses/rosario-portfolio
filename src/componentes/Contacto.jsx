import "../assets/estilos/Contacto.css";

function Contacto() {
  return (
    <>
      <section id="contacto" className="section">
        <div className="section-content">
          <div className="contacto-texto">
            <h4 className="titulo-contacto">Hablemos</h4>
            <p className="texto-contacto">
              Me encantaría conocerte. Ya sea para colaborar en un proyecto o
              simplemente para compartir ideas, estoy abierta a nuevas
              conexiones.{" "}
            </p>
          </div>
          <div className="contacto-accion">
            <div className="contacto-formulario">x</div>
            <div className="contacto-iconos">x</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
