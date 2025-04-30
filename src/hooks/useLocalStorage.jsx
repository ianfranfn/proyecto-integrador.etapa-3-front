import { useState } from "react"

export const useLocalStorage = (clave, valorInicial = []) => {
    const [valorAlmacenado, setValorAlmacenado] = useState(() => {
        try {
            const valor = window.localStorage.getItem(clave)
            return valor ? JSON.parse(valor) : valorInicial
        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage: ${error}`)
            return valorInicial
        }
    })

    const guardarValor = (nuevoItem) => {
        try {
            const nuevoCarrito = [...valorAlmacenado]
            const itemExistenteIndex = nuevoCarrito.findIndex(item =>
                item.id === nuevoItem.id &&
                JSON.stringify(item.opciones) === JSON.stringify(nuevoItem.opciones)
            )

            if (itemExistenteIndex !== -1) {
                // Usar la cantidad del nuevoItem si existe
                nuevoCarrito[itemExistenteIndex] = {
                    ...nuevoCarrito[itemExistenteIndex],
                    cantidad: nuevoItem.cantidad !== undefined ?
                        nuevoItem.cantidad :
                        nuevoCarrito[itemExistenteIndex].cantidad + 1
                }
            } else {
                nuevoCarrito.push({ ...nuevoItem, cantidad: 1 })
            }

            setValorAlmacenado(nuevoCarrito);
            window.localStorage.setItem(clave, JSON.stringify(nuevoCarrito));
        } catch (error) {
            console.error(`Error al guardar en localStorage: ${error}`);
        }
    }

    const eliminarValor = (id) => {
        try {
            const nuevoCarrito = valorAlmacenado.filter(item => item.id !== id)
            setValorAlmacenado(nuevoCarrito)
            window.localStorage.setItem(clave, JSON.stringify(nuevoCarrito))
        } catch (error) {
            console.error(`Error al eliminar del localStorage: ${error}`)
        }
    }

    const limpiarValores = () => {
        try {
            setValorAlmacenado(valorInicial)
            window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        } catch (error) {
            console.error(`Error al limpiar localStorage: ${error}`)
        }
    }

    return [
        guardarValor,
        eliminarValor,
        limpiarValores,
        valorAlmacenado, // Ahora en cuarta posición
        setValorAlmacenado // Nuevo setter directo
    ]
}

