import '../assets/estilos/Bienvenida.css'

function Bienvenida() {
  return (
    <>
      <div className="contenedor">
        <h2 className="titulo-bienvenida">
          Todo gran viaje comienza con una idea. ¡Bienvenido al mío!
        </h2>
        <h4>
          Descubre cómo la creatividad y la tecnología se cruzan en mi historia.
        </h4>
        <p className="texto-bienvenida">
          Soy Rosario Ramos, desarrolladora front-end y apasionado por las
          experiencias que transforman ideas en realidad. Mi camino comenzó con
          curiosidad, y hoy busco innovar en cada proyecto. Acompáñame mientras
          recorremos este viaje juntos{" "}
        </p>
      </div>
      <div className="contenedor-texto"></div>
    </>
  );
}

export default Bienvenida;
