import ListadoCarrito from "../components/ComponentsCarrito/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"

const Carrito = () => {
  useTitulo('Carrito')

  return (
    <div className="carrito-container">
      <h1>Productos en el carrito</h1>
      <hr />
      <ListadoCarrito />
    </div>
  )
}

export default Carrito