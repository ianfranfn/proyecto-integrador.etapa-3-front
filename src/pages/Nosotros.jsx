import { Link } from 'react-router';
import useTitulo from '../hooks/useTitulo';
import './Contacto.scss';
import './Nosotros.scss';

const Nosotros = () => {
  useTitulo('Nosotros');

  return (
    <>

      <header
        className="contacto-main-header">
        <input type="checkbox" id="menu" />

        <nav className="contacto-nav-bar">
          <ul className="contacto-nav-bar__nav-list">
            <li className="contacto-nav-bar__nav-item">
              <Link to="/" className="contacto-nav-bar__nav-link">Inicio</Link>
            </li>
            <li className="contacto-nav-bar__nav-item">
              <Link to="/alta" className="contacto-nav-bar__nav-link">Alta</Link>
            </li>
            <li className="contacto-nav-bar__nav-item">
              <Link to="/nosotros" className="contacto-nav-bar__nav-link">Nosotros</Link>
            </li>
            <li className="contacto-nav-bar__nav-item">
              <Link to="/contacto" className="contacto-nav-bar__nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="contacto-search-bar">
          <img
            src="/imgs/logo-humaita-contacto.webp"
            className="contacto-search-bar__logo-container"
            alt="Logo Humaitá"
          />
          <Link to="/carrito" className="search-bar__carrito-container"><i className="bi bi-cart4"></i></Link>
          <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
              <span className="menu-toogle__top-bread"></span>
              <span className="menu-toogle__meat"></span>
              <span className="menu-toogle__bottom-bread"></span>
            </label>
          </div>
        </div>
      </header>

      <main className="nosotros-main">
        <header className="nosotros-main__header">
          <h1 className="nosotros-main__titulo">Nuestra Historia</h1>
          <p className="nosotros-main__subtitulo">
            Más de 20 años sirviendo los mejores sabores tradicionales con un toque moderno
          </p>
        </header>

        <section className="nosotros-section">
          <h2 className="nosotros-section__titulo">Desde nuestros inicios</h2>
          <div className="nosotros-section__contenido">
            <p className="nosotros-section__texto">
              Humaitá nació en 2019 como un sueño familiar que buscaba honrar las raíces históricas
              de las <strong>Ruinas de Humaitá</strong>, emblemático sitio paraguayo declarado Patrimonio Cultural
              de la Humanidad. Lo que comenzó como un pequeño local familiar, hoy se ha transformado
              en un referente gastronómico que une lo mejor de las culturas argentina y paraguaya.
              <br /><br />
              En 2024 dimos un paso innovador con la inauguración de <strong>"Patio Ruinas"</strong>, nuestro
              espacio al aire libre dedicado a las comidas rápidas gourmet, donde la historia se mezcla con
              la modernidad en cada detalle.
            </p>
            <img
              src="/imgs/humaita-imagen.webp"
              alt="Imagen del restaurante"
              className="nosotros-section__imagen"
            />
          </div>
        </section>

        <div className="nosotros-separator"></div>

        <section className="nosotros-section">
          <h2 className="nosotros-section__titulo">Nuestra Propuesta Gastronómica</h2>
          <div className="nosotros-section__content">
            <p className="nosotros-section__texto">
              Bajo la dirección de nuestra chef fundadora, egresada de la prestigiosa Escuela
              Argentina de Cocina, ofrecemos una experiencia culinaria única donde conviven:
              <br /><br />
              🍔 <strong>Comidas rápidas premium</strong>: Hamburguesas artesanales y pizzas de horno de barro<br />
              🍝 <strong>Cocina tradicional</strong>: Pastas caseras y asados con cortes seleccionados<br />
              🍹 <strong>Mixología creativa</strong>: Tragos signature con toques regionales<br />
              🥘 <strong>Fusión cultural</strong>: Platos que dialogan entre Paraguay y Argentina<br /><br />

              Nuestro compromiso: Mantener la autenticidad de las recetas tradicionales mientras
              innovamos con técnicas contemporáneas.
            </p>
          </div>
        </section>

        <section className="nosotros-section">
          <h2 className="nosotros-section__titulo">Patio Ruinas: Un viaje sensorial</h2>
          <div className="nosotros-section__content">
            <p className="nosotros-section__texto">
              Nuestra joya de 2024 no es solo un espacio gastronómico, sino un homenaje arquitectónico
              a la historia que nos inspira. En <strong>Patio Ruinas</strong> encontrarás:
              <br /><br />
              • Ambiente al aire libre con diseño que evoca las construcciones históricas<br />
              • Menú express de alta calidad disponible hasta la madrugada<br />
              • Eventos temáticos mensuales con promociones especiales<br />
              • Degustaciones guiadas de platos biculturales<br /><br />

              ¡El lugar perfecto para disfrutar nuestras famosas "Ofertas Históricas" en fechas
              patrias y celebraciones especiales!
            </p>
          </div>
        </section>
      </main>

    </>
  );
}

export default Nosotros;