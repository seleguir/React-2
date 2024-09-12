// Desarrolla un conjunto de botones que respondan de manera diferente cuando se hace clic y cuando se hace doble clic. (click y dblclick)

import React, { useState } from 'react';
import './Botones.css'; 

function Botones() {
  // Estados para manejar las clases de estilo de cada elemento
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState('normal');
  const [textColor, setTextColor] = useState('black');

  return (
    <div>
      <button
        // Al hacer clic, cambia el color de fondo
        onClick={() => setBackgroundColor('lightpink')}  
        // Al hacer doble clic, elimina el color de fondo, volviendo al estilo predeterminado
        onDoubleClick={() => setBackgroundColor('white')} 
      >
        Cambiar color de fondo
      </button>

      <button
        // Al hacer clic, aumenta el tamaño de fuente 
        onClick={() => setFontSize(fontSize + 2)}
        // Al hacer doble clic, restablece la letra a su tamaño original
        onDoubleClick={() => setFontSize(16)}
      >
        Aumentar tamaño de fuente
      </button>

      <button
        // Alterna la fuente entre negrita y normal
        onClick={() => setFontWeight('bold')}
        // Al hacer doble clic, la fuente vuelve a ser normal 
        onDoubleClick={() => setFontWeight('normal')}
      >
        Negrita / Normal
      </button>

      <button
        // Al hacer un clic, cambia el color del texto a azul o lo vuelve a negro
        onClick={() => setTextColor('blue')}
        // Al hacer doble clic, restablece el color 
        onDoubleClick={() => setTextColor('black')}
      >
        Cambiar color de texto
      </button>

      <div
        // Estilos dinámicos basados en el estado del componente 
        style={{
          backgroundColor,
          fontSize: `${fontSize}px`,
          fontWeight,
          color: textColor,
          padding: '10px',
          marginTop: '10px'
        }}
      >
        ¡Mirá cómo cambio!
      </div>
    </div>
  );
}

export default Botones;

   