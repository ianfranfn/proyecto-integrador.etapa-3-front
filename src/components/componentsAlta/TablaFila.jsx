import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import './Tabla.scss'
import { useNavigate } from "react-router"

const TablaFila = ({ producto }) => {

  const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext)

  const navigate = useNavigate()

  const handleVer = (id) => {
    navigate(`/productos/detalle/${id}`)
  }

  const handleEliminar = (id) => {
    eliminarProductoContext(id)
  }

  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <tr>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.marca}</td>
        <td>{producto.categoria}</td>
        <td>{producto.detalles}</td>
        <td>
            <img src={producto.foto} alt={producto.nombre} style={{ width: '40px'}} />
        </td>
        <td>{producto.envio ? 'si' : 'no'}</td>
        <td>
            <button onClick={() => handleVer(producto.id)}>Ver</button>
            <button onClick={() => handleEditar(producto)}>Editar</button>
            <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
        </td>
    </tr>
  )
}

export default TablaFila