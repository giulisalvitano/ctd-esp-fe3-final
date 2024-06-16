import React from "react";

const Envio = ({ cliente }) => {
  return (
    <>
      <h3>Gracias {cliente.nombre}, te contactaremos cuando antes vía mail.</h3>
      <p>Tu email: {cliente.email}</p>
      <p>Tu descripción: {cliente.descripcion}</p>
    </>
  );
};

export default Envio;
