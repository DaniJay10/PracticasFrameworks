import Ejercicio1 from "./components/Ejercicio1";
import { useState } from "react";
import Ejercicio2 from "./components/Ejercicio2";
import Contador from "./components/Ejercicio3";

const App = () => {
  //ejercicio1 y 2
  const [Estado, setEstado] = useState(false);
  const handleClick = () => {
    setEstado(!Estado);
  };
  //ejercicio3
  const [contador, setContador] = useState(0);
  const incrementClick = () => {
    setContador(contador + 1);
  };
  const decrementClick = () => {
    setContador(0);
  };
  return (
    <>
      <div>
        <h4>Ejercicios 1 y 2</h4>
        <br></br>
        <Ejercicio2 Estado={Estado}></Ejercicio2>
        <Ejercicio1 onClick={handleClick} Estado={Estado}>
          MostrarTexto
        </Ejercicio1>
      </div>
      <br></br>
      <div>
        <h4>Ejercicio 3</h4>
        <Contador contador={contador} />
        <button
          onClick={incrementClick}
          type="button"
          className="btn btn-success"
        >
          Incrementar
        </button>
        <button
          onClick={decrementClick}
          type="button"
          className="btn btn-danger"
        >
          Reiniciar
        </button>
      </div>
    </>
  );
};

export default App;
