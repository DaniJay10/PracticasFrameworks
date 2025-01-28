import { useState } from "react";

const DinamycList = () => {
  // Estado para almacenar la lista de elementos
  const [list, setList] = useState<string[]>([]);
  // Estado para almacenar el nuevo elemento
  const [item, setItem] = useState("");

  // Función para agregar un nuevo elemento a la lista
  const addItem = () => {
    if (item.trim() !== "") {
      // Evitar agregar elementos vacíos
      setList([...list, item]); // Crear una nueva lista con el nuevo elemento
      setItem(""); // Limpiar el input
    }
  };

  // Función para eliminar un elemento específico
  const removeItem = (index: number) => {
    const newList = list.filter((_, i) => i !== index); // Filtrar los elementos
    setList(newList); // Actualizar la lista
  };

  return (
    <>
      {/* Renderizar la lista */}
      <ul className="list-group">
        {list.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
            <button
              type="button"
              className="btn btn-danger btn-sm ms-2"
              onClick={() => removeItem(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {/* Input para ingresar un nuevo elemento */}
      <input
        type="text"
        placeholder="Ingresar un elemento"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="form-control mt-2"
      />
      <button type="button" className="btn btn-primary mt-2" onClick={addItem}>
        Agregar
      </button>
    </>
  );
};

export default DinamycList;
