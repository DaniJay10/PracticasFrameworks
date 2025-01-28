import { useState } from "react";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleClick = () => {
    {
      Email && Password !== "" ? alert("Bienvenido") : alert("Error");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        type="Password"
        placeholder="contraseña"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Iniciar sesion
      </button>
    </>
  );
};

export default LoginForm;
