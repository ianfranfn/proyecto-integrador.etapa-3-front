import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import DragDrop from "./DragDrop"

const Formulario = () => {

    const { 
        crearProductoContext, 
        productoAEditar, 
        setProductoAEditar, 
        actualizarProductoContext } = useContext(ProductosContext)

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        detalles: '',
        foto: '',
        envio: false
    }

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar])
    

    const [form, setForm] = useState(formInicial)
    const placeHolderImagen = 'http://localhost:8080/uploads/placeholderimagen.webp'
    const [foto, setFoto] = useState({ foto: placeHolderImagen })
    const [srcImagenBack, setSrcImagenBack] = useState(placeHolderImagen)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.id === null) {
            const productoNuevoConImagen = {...form, ...foto}
            crearProductoContext(productoNuevoConImagen)
        } else {
            const productoNuevoConImagen = {...form, ...foto}
            actualizarProductoContext(productoNuevoConImagen)
        }

    }

    const handleChange = (e) => {

        const { type, name, checked, value } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    
    }

    const handleReset = () => {
        setForm(formInicial)
        setProductoAEditar(null)
        setFoto({ foto: placeHolderImagen })
        setSrcImagenBack(placeHolderImagen)
    }


    return (
        <div className="formulario-alta">
            <h2>Agregar: Editar</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="lbl-nombre">Nombre</label>
                    <input
                        type="text"
                        id="lbl-nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-precio">Precio</label>
                    <input
                        type="text"
                        id="lbl-precio"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-stock">Stock</label>
                    <input
                        type="text"
                        id="lbl-stock"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-marca">Marca</label>
                    <input
                        type="text"
                        id="lbl-marca"
                        name="marca"
                        value={form.marca}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-categoria">Categoría</label>
                    <input
                        type="text"
                        id="lbl-categoria"
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-detalle">Detalles</label>
                    <input
                        type="text"
                        id="lbl-detalle"
                        name="detalles"
                        value={form.detalles}
                        onChange={handleChange} />
                </div>
                <div>
                    <DragDrop 
                    setFoto={setFoto}
                    srcImagenBack={srcImagenBack}
                    setSrcImagenBack={setSrcImagenBack}
                    />
                </div>
                <div>
                    <label htmlFor="lbl-envio">Envío</label>
                    <input
                        type="checkbox"
                        id="lbl-envio"
                        name="envio"
                        checked={form.envio}
                        onChange={handleChange} />
                </div>

                <button type="submit">Guardar : Editar</button>
                <button type="reset" onClick={handleReset}>Limpiar</button>

            </form>

        </div>
    )
}

export default Formulario