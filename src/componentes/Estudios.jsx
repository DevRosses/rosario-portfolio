import "../assets/estilos/Estudios.css";

function Estudios() {
  return (
    <>
      <section id="estudios" className="section seccion-estudios">
        <div className="section-content">
          <h4 className="titulo-estudios">
            Mi formación, desde lo académico hasta lo práctico
          </h4>
          <p className="texto-estudios">
            Mi viaje educativo ha sido una mezcla de teoría y práctica. Desde la
            universidad hasta los cursos online, he construido una base sólida
            en tecnologías como JavaScript, React, y más. Estos estudios no solo
            me han dado las habilidades técnicas, sino también la capacidad de
            pensar de manera crítica y creativa.{" "}
          </p>
          <div className="galleria">
            <div className="gallery-item">Item 1</div>
            <div className="gallery-item">Item 2</div>
            <div className="gallery-item">Item 3</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Estudios;
