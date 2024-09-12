// 2 - Desarrolla un formulario con varios campos (como nombre, correo electrónico y contraseña) que valide la entrada en tiempo real 
// y muestre mensajes de error dinámicos. (input o change)

import React, { useState } from 'react';
import './Formulario.css'; 

function Formulario() {
  // Estado para almacenar los valores de los campos del formulario
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    contrasena: ''
  });

  const [errores, setErrores] = useState({});

  // Función para validar cada campo según su nombre y valor
  const validar = (name, value) => {
    if (!value) {
      return 'Este campo es obligatorio.'; // Mensaje para campos vacíos
    }
    switch (name) {
      case 'nombre':
        return value.length > 0 ? '' : 'El nombre es obligatorio.';
      case 'correo':
        return /^\S+@\S+\.\S+$/.test(value) ? '' : 'El correo no es válido.';
      case 'contrasena':
        return value.length >= 6 ? '' : 'La contraseña debe tener al menos 6 caracteres.';
      default:
        return '';
    }
  };

  // Manejador de cambio en los campos de entrada para actualizar el estado y validar
  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validar(name, value); // Validar el valor del campo
    setDatos({
      ...datos,
      [name]: value
    });
    setErrores({
      ...errores,
      [name]: error
    });
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValido = Object.values(datos).every(x => x) && Object.values(errores).every(x => !x);
    if (!formValido) {
      alert('Por favor, corrija los errores antes de enviar.');
      return;
    }
    alert('Formulario enviado'); // Simulación de envío del formulario
  };

  return (

    <form onSubmit={handleSubmit} className="formulario">
       <h1> Formulario </h1>
      <div className="campo">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
      </div>
      <div className="campo">
        <label>Correo electrónico:</label>
        <input
          type="email"
          name="correo"
          value={datos.correo}
          onChange={handleChange}
        />
        {errores.correo && <p className="error">{errores.correo}</p>}
      </div>
      <div className="campo">
        <label>Contraseña:</label>
        <input
          type="password"
          name="contrasena"
          value={datos.contrasena}
          onChange={handleChange}
        />
        {errores.contrasena && <p className="error">{errores.contrasena}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;