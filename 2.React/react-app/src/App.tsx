import Card from "./components/Card";
import CardBody from "./components/CardBody";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  // const lista: string[] = ["Iniesta", "Xavi"];
  // const handleSelect = (elemento: string) => {
  //   console.log("imprimiendo", elemento);
  // };
  // //metodo 1 de rendereizado condicional
  // const cont =
  //   lista.length !== 0 ? (
  //     <List data={lista} onSelect={handleSelect} />
  //   ) : (
  //     "Sin elementos para mostrar"
  //   );
  // //metodo 2 de rendereizado condicional
  // const cont2 = lista.length !== 0 && (
  //   <List data={lista} onSelect={handleSelect} />
  // );

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => {
  //   setIsLoading(true);
  // };
  // return (
  //   <>
  //     <Card>
  //       <Button onClick={handleClick} isLoading={isLoading}>
  //         Agregar
  //       </Button>
  //       <br></br>
  //       {cont}
  //     </Card>
  //   </>
  // );
  const [Data, setData] = useState(["Iniesta", "Xavi", "Messi"]);
  const addMessi = () => {
    setData([...Data, "Messi"]);
  };
  const deleteMessi = () => {
    setData(Data.slice(0, Data.length - 1));
  };

  return (
    <>
      <Card>
        <Button onClick={addMessi}>Agregar</Button>
        <Button onClick={deleteMessi}>Eliminar</Button>
        <List data={Data} />
      </Card>
      <h1>Todo esto fue en vano</h1>
    </>
  );
}
export default App;
