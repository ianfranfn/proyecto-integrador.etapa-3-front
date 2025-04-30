import { useContext, useState } from "react"
import CarritoContext from "../../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const {
        carrito,
        limpiarCarritoContext,
        guardarCarritoBackendContext,
        calcularSubtotalContext,
        calcularTotalContext,
        calcularCantidadTotalContext
    } = useContext(CarritoContext);
    

    console.log(carrito)

    const handleComprar = async () => {
        try {
            setLoading(true);
            setError(null);
            await guardarCarritoBackendContext();
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            setError('Error al procesar la compra. Intente nuevamente.');
        } finally {
            setLoading(false);
        }
    }

    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }

    return (
        <div className="carrrito-container">
            <table className='tabla-carrito'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.length <= 0 ? (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center' }}>No hay productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <ItemCarrito key={idx} producto={producto} />
                            ))
                        )
                    }
                </tbody>
            </table>

            <div className="resumen-carrito">
                <div className="resumen-item">
                    <span>Productos en el carrito:</span>
                    <span>{calcularCantidadTotalContext()}</span>
                </div>
                <div className="resumen-item">
                    <span>Subtotal:</span>
                    <span>${calcularSubtotalContext().toFixed(2)}</span>
                </div>
                <div className="resumen-item total">
                    <span>Total:</span>
                    <span>${calcularTotalContext().toFixed(2)}</span>
                </div>
            </div>

            <hr />
            {!carrito.length <= 0 && (
                <div className="botones-carrito">
                    <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button
                        onClick={handleComprar}
                        disabled={loading}>
                        {loading ? 'Procesando...' : 'Comprar'}
                    </button>
                </div>
            )}
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">¡Compra exitosa! 🎉</div>}
        </div>
    )
}

export default ListadoCarrito