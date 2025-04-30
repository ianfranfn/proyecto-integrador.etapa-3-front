import { Link } from 'react-router'
import useTitulo from '../hooks/useTitulo'
import './Contacto.scss'


const Contacto = () => {


  useTitulo('Contacto')

  return (
    <>
      <header className="contacto-main-header">
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

      <main>
        <section className="contact-container">
          <h1>¡Contáctanos!</h1>
      <div className="contact-container__form">
        <form>
          <div className="contact-container__form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input 
              type="text" 
              id="nombre" 
              placeholder="Ej: Juan Pérez" 
              required 
            />
          </div>

          <div className="contact-container__form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Ej: juan.perez@example.com"
              required
            />
          </div>

          <div className="contact-container__form-group">
            <label htmlFor="comentarios">Comentarios:</label>
            <textarea
              id="comentarios"
              placeholder="Ej: Por favor, ingrese su mensaje aquí..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-container__submit-btn">
            Enviar Mensaje
          </button>
        </form>
      </div>
      <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113482.83377495689!2d-58.32534045867421!3d-27.2712668674467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x945ac92afa847a07%3A0x3fafa9c3b3122c51!2sAv.%2025%20de%20Mayo%2C%20W3414%20Itat%C3%AD%2C%20Corrientes!3m2!1d-27.271290999999998!2d-58.242939!5e0!3m2!1ses-419!2sar!4v1739201736200!5m2!1ses-419!2sar"
              title="Mapa de ubicación"
              aria-label="Mapa de nuestra ubicación física"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>📍 Dirección: Av. 25 de Mayo, W3414 Itatí, Corrientes</p>
            <p>📞 Teléfono: +54 379 409-2247</p>
            <p>✉️ Email: humaitarestobar@gmail.com</p>

            <div className="contact-info__links">
              <a href="https://www.facebook.com/p/Humaitá-Resto-Bar-100075906922369/" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/humaitarestobar" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B543794092247&text&type=phone_number&app_absent=0" 
                 target="_blank" 
                 rel="noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contacto