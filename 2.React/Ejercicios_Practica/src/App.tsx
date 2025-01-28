import Ejercicio1 from "./components/Ejercicio1";
import { useState } from "react";
import Ejercicio2 from "./components/Ejercicio2";
import Contador from "./components/Ejercicio3";
import ChangeColor from "./components/Ejercicio4";
import LoginForm from "./components/Ejercicio5";
import DinamycList from "./components/Ejercicio6";
const App = () => {
  //ejercicio1 y 2
  const [Estado, setEstado] = useState(false);
  const handleClick = () => {
    setEstado(!Estado);
  };
  //ejercicio3

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
        <Contador />
      </div>
      <br></br>
      <div>
        <h4>Ejercicio 4</h4>
        <ChangeColor />
      </div>
      <br></br>
      <div>
        <h4>Ejercicio 5</h4>
        <LoginForm />
      </div>
      <br></br>
      <div>
        <h4>Ejercicio 6</h4>
        <DinamycList />
      </div>
    </>
  );
};

export default App;
