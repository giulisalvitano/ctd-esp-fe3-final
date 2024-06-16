import React, { useState } from "react";
import Envio from "./Envio";
import Button from "./Button";

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    descripcion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) =>
    setCliente({ ...cliente, nombre: event.target.value });
  const handleEmail = (event) =>
    setCliente({ ...cliente, email: event.target.value });
  const handleDescripcion = (event) =>
    setCliente({ ...cliente, descripcion: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (
      cliente.nombre.trim().length > 3 && regex.test(cliente.email) &&
      cliente.consulta.trim().length > 15)
    {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <>
      {/* Operador ternario
        condicion ? true : false
        Reemplazo de if/else
      */}
      {show ? (
        <Envio cliente={cliente} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" value={cliente.nombre} onChange={handleName} />
          <label>Email:</label>
          <input
            type="email"
            value={cliente.email}
            onChange={handleEmail} />
          <label>Descripción:</label>
          <textarea onChange={handleDescripcion}>
          </textarea>
          <Button>Enviar</Button>
        </form>
      )}
      {/* Operador ternario simplificado
            {condicion && true}
            Reemplazo de el if solito (sin el else)
        */}
      {error && (
        <p style={{ color: "red" }}>Por favor verifique su información nuevamente</p>
      )}
    </>
  );
};

export default Form;
