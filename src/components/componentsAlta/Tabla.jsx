import TablaFila from "./TablaFila"
import './Tabla.scss'
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import Spinner from "../Spinner"

const Tabla = () => {

    const { productos } = useContext(ProductosContext)

  return (
    <table className="tabla-alta">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Detalles</th>
                <th>Foto</th>
                <th>Envío</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        {productos ? (
          productos.length > 0 ? (
            productos.map((producto) => (
              <TablaFila producto={producto} key={producto.id} />
            ))
          ) : (
            <tr>
              <td colSpan="9" className="tabla-mensaje-vacia">
                No hay productos cargados
              </td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan="9">
              <div className="spinner-container">
                <Spinner />
              </div>
            </td>
          </tr>
        )}

        </tbody>
    </table>
  )
}

export default Tabla