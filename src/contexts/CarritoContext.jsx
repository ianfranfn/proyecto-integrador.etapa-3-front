import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";


const CarritoContext = createContext()

const CarritoProvider = ({ children }) => {
    const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO;
    const [carrito, setCarrito] = useState(() => {

        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });


    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarProductoAlCarritoContext = (producto) => {
        const nuevoCarrito = [...carrito]

        const productoSimplificado = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            foto: producto.foto,
            opciones: producto.opciones ? producto.opciones : null
        }

        const productoExistenteIndex = nuevoCarrito.findIndex(prod =>
            prod.id === productoSimplificado.id &&
            JSON.stringify(prod.opciones) === JSON.stringify(productoSimplificado.opciones)
        )


        if (productoExistenteIndex !== -1) {
            nuevoCarrito[productoExistenteIndex] = {
                ...nuevoCarrito[productoExistenteIndex],
                cantidad: producto.cantidad || nuevoCarrito[productoExistenteIndex].cantidad + 1
            }
        } else {
            nuevoCarrito.push({ 
              ...productoSimplificado, 
              cantidad: 1 
            });
          }
        setCarrito(nuevoCarrito)
    }

    const eliminarProductoDelCarritoContext = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
        window.localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
    }

    const limpiarCarritoContext = () => {
        setCarrito([]);
        window.localStorage.setItem('carrito', JSON.stringify([]))
    }



    const guardarCarritoBackendContext = async () => {
        try {
            const dataCarrito = {
                fecha: new Date().toISOString(),
                items: carrito,
                total: calcularTotalContext(),
                cantidad: carrito.length,
                estado: "completado"
            };

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(dataCarrito)
            };

            await peticionesHttp(urlCarrito, options);
            limpiarCarritoContext();
            console.log('Carrito guardado en MockAPI!');
        } catch (error) {
            console.error('[guardarCarritoBackendContext]', error);
            throw error;
        }
    }

    const calcularSubtotalContext = () => {
        return carrito.reduce((total, producto) =>
            total + (producto.precio * producto.cantidad), 0
        );
    };

    const calcularTotalContext = () => {
        return calcularSubtotalContext();
    };

    const calcularCantidadTotalContext = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    }


    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        limpiarCarritoContext,
        guardarCarritoBackendContext,
        calcularSubtotalContext,
        calcularTotalContext,
        calcularCantidadTotalContext
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }
export default CarritoContext