import { createContext, useContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";

// ! CREANDO CONTEXTO

// ! 1. Creamos el Context
const ProductosContext = createContext()
// ! 2. Armamos el Provider
const ProductosProvider = ( { children } ) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])
    

    const getAllProductos = async () => {

        try {
            
            const prods = await peticionesHttp(url, {})

            setProductos(prods)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }

    }

    const crearProductoContext = async (productoNuevo) => {
        // console.log(productoNuevo)

        try {
            // Es borrar el atributo/key id del objeto productoNuevo

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoNuevo)
            }
            
            const prods = await peticionesHttp(url, options)
            // console.log(prods)
            setProductos([...productos, prods])
            
        } catch (error) {
            console.error('[crearProductoContext]', error)
        }

    }

    const actualizarProductoContext = async (productoAEditar) => {
        //console.log(productoAEditar)

        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoAEditar)
            }

            const urlActualizar = `${url}/${productoAEditar.id}`

            const productoEditado = await peticionesHttp(urlActualizar, options)
            console.log(productoEditado)

            const nuevoEstadoProductos = productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }
    }

    const eliminarProductoContext = async (id) => {
        // console.log(id)

        try {

            const urlEliminacion = `${url}/${id}`

            const options = {
                method: 'DELETE'
            }

            const prodEliminado = await peticionesHttp(urlEliminacion, options)
            console.log(prodEliminado)

            const nuevoEstadoProductos = productos.filter(prod => prod.id !== id)
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[eliminarProductoContext]', error)
        }

    }

    const useProductos = () => {
        const context = useContext(ProductosContext)
        if (!context) {
          throw new Error('useProductos debe usarse dentro de un ProductosProvider')
        }
        return context
      }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProductoContext,
        productoAEditar,
        setProductoAEditar,
        useProductos
    }

    return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}
// ! 3. Exportamos el Context y el Provider
export { ProductosProvider }
export default ProductosContext

