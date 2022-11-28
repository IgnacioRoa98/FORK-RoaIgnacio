import "../contador/Contador.css";
import { useState } from "react";
const Contador = ({ inicio }) => {
  const [count, setCount] = useState(inicio);

  const Crece = () => {
    setCount(count + 1);
  };
  const Decrecer = () => {
    setCount(inicio);
  };
  return (
    <div className="botones">
      <h2> {count} </h2>
      <button onClick={() => Crece()}>Añadir al carrito</button>
      <button onClick={() => Decrecer()}>Eliminar del carrito</button>
    </div>
  );
};
export default Contador;
