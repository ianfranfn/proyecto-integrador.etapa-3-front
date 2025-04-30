import './Cabecera.scss'
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Cabecera = () => {
  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />

      <Navbar />

      <SearchBar />

    </header>
  );
};

export default Cabecera;
