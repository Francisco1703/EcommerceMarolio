import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="imgFooter">
        <img
          className="imgMarolio"
          src="../../img/marolio.png"
          alt="Logo de Marolio"
        />
      </div>
      <div className="contactate">
        <h3>CONTACTATE CON NOSOTROS</h3>
        <p>
          Acceso Oeste (Gaona) 8676/8742, La Reja-Moreno - Bs. As. Argentina
        </p>
        <p>Horario de Atención: De 8:00hs a 16:00hs</p>
        <div className="email">
          <img
            className="imgSobre"
            src="../../img/sobre.png"
            alt="Sobre de Email"
          />
          <p>
            Email: <a href="#">info@marolio.com.ar</a>
          </p>
        </div>
        <div className="telefono">
          <img
            className="imgTelefono"
            src="../../img/telefono.png"
            alt="Teléfono"
          />
          <p>Teléfono: 0800-777-6276</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
