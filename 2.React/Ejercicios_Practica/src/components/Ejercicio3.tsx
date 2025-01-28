import { useState } from "react";
const Contador = () => {
  const [contador, setContador] = useState(0);
  const incrementClick = () => {
    setContador(contador + 1);
  };
  const decrementClick = () => {
    setContador(0);
  };
  return (
    <>
      <div>Contador: {contador}</div>
      <button
        onClick={incrementClick}
        type="button"
        className="btn btn-success"
      >
        Incrementar
      </button>
      <button onClick={decrementClick} type="button" className="btn btn-danger">
        Reiniciar
      </button>
    </>
  );
};

export default Contador;
