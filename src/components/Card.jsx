import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Card.scss';
import CarritoContext from '../contexts/CarritoContext';
import { SALSAS, GUARN } from '../constants/menuItems.js';
import { useNavigate } from 'react-router'


const Card = ({ producto }) => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef(null)
  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)
  const { handleSubmit, register } = useForm()

  const handleCardClick = (e) => {
    const interactiveElements = [
      '.card__form-container',
      '.card__botones-container',
      'INPUT',
      'LABEL',
      'BUTTON'
    ].some(selector =>
      e.target.closest(selector) ||
      e.target.matches(selector)
    )

    if (!interactiveElements) {
      setIsActive(!isActive)
    }
  }


  const crearRadioButton = (name, id, label) => {
    return (
      <label className='card__form-input-container' key={id}>
        <input type="radio"
          id={id}
          value={id}
          className='card__form-input'
          {...register(name, { required: true })}
        />
        {label}
      </label>
    )
  }

  const handleAgregar = (formData) => {
    agregarProductoAlCarritoContext({
      ...producto,
      opciones: formData
    })
    setIsActive(false)
  }


  return (
    <div
      ref={cardRef}
      className={`card ${isActive ? 'active' : ''}`}
      onClick={handleCardClick}
      role='button'
      tabIndex={0}
    >
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src={producto.foto} alt={producto.nombre} />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.descripcion}</p>
          </div>

          <form className="card__form" onSubmit={handleSubmit(handleAgregar)}>
            <div className="card__form-container">
              <div className="card__form-group">
                <h3 className="card__form-group-title">Selecciona la salsa:</h3>
                {SALSAS.map((salsa) => (
                  crearRadioButton('salsa', salsa.id, salsa.label)
                ))}
              </div>

              <div className="card__form-group">
                <h3 className="card__form-group-title">Selecciona la guarnición:</h3>
                {GUARN.map((guarnicion) =>
                  crearRadioButton('guarnicion', guarnicion.id, guarnicion.label)
                )}
              </div>
            </div>

            <div className="card__botones-container">
              <button
                type="submit"
                className="card__boton card__boton--carrito"
                onClick={() => handleAgregar(producto)}
              >Carrito</button>

              <button
                type="button"
                className="card__boton card__boton--ver-detalles"
                onClick={() => navigate(`/productos/detalle/${producto.id}`)}
              >
                Ver detalles
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  )
}

export default Card