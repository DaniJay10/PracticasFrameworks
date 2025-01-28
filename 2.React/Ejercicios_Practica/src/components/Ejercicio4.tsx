import { useState } from "react";
const ChangeColor = () => {
  const color: string[] = ["red", "blue", "green"];
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((index + 1) % color.length);
  };

  return (
    <>
      <div
        style={{
          color: "white",
          backgroundColor: color[index],
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        Este párrafo cambiará de color
      </div>
      <button onClick={handleClick} type="button" className="btn btn-info">
        Cambiar color
      </button>
    </>
  );
};

export default ChangeColor;
