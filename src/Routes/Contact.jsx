import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contact">
      <h2>¿Quieres mas información?</h2>
      <p>Envíanos tus preguntas y te contactaremos cuanto antes</p>
      <Form/>
    </div>
  )
}

export default Contact


