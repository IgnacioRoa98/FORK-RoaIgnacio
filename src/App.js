import "./App.css";
import NavBar from "./components/navbar/Navbar";
import ItemList from "./components/itemList/ItemList";
import Contador from "./components/contador/Contador";
function App() {
  return (
    <div>
      <NavBar />
      <ItemList titulo="NUESTROS PRODUCTOS" />
      <Contador inicio={0} /> 
    </div>
  );
}

export default App;
