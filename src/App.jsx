import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Cabecera from "./components/componentsLayout/Cabecera"
import Footer from "./components/componentsLayout/Footer"
import { ProductosProvider } from "./contexts/ProductosContext"
import { CarritoProvider } from "./contexts/CarritoContext"

const App = () => {
  return (
    <BrowserRouter>
      <ProductosProvider>
        <CarritoProvider>
          <Cabecera />
          <Rutas />
          <Footer />
        </CarritoProvider>
      </ProductosProvider>
    </BrowserRouter>
  )
}

export default App