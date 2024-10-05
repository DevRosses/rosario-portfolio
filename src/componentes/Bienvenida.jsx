import "../assets/estilos/Bienvenida.css";

function Bienvenida() {
  return (
    <>
      <section id="bienvenida" className="section seccion-bienvenida">
        <div className="section-content">
          <h2 className="titulo-bienvenida">
            Todo gran viaje comienza con una idea.
            <br />
            <span>¡Bienvenido al Mio!</span>
          </h2>
          <h4 className="subtitulo-bienvenida">
            Descubre cómo la creatividad y la tecnología se cruzan en mi
            historia.
          </h4>
          <p className="texto-bienvenida">
            Soy Rosario Ramos, desarrolladora front-end y apasionado por las
            experiencias que transforman ideas en realidad. Mi camino comenzó
            con curiosidad, y hoy busco innovar en cada proyecto. Acompáñame
            mientras recorremos este viaje juntos{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default Bienvenida;
