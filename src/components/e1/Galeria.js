// 1- Desarrolla una galería de imágenes que permita a los usuarios navegar entre ellas utilizando las teclas de flecha izquierda y derecha.(keydown)

import React, { useState, useEffect, useCallback } from 'react';
import './Galeria.css'; 
import imagen1 from '../../images/imagen1.png';
import imagen2 from '../../images/imagen2.png';
import imagen3 from '../../images/imagen3.png';

function Galeria() {
  // Estado para almacenar el índice de la imagen actual
  const [indice, setIndice] = useState(0);

  // Array de imágenes importadas desde la carpeta 'images'
  const imagenes = [imagen1, imagen2, imagen3];

  // Función para manejar las teclas
  const manejarTecla = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      // Si se presiona la flecha derecha, el índice incrementa
      setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
    } else if (e.key === 'ArrowLeft') {
      // Si se presiona la flecha izquierda, el índice disminuye
      setIndice((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length);
    }
  }, [imagenes.length]);

  
  useEffect(() => {
    window.addEventListener('keydown', manejarTecla);
    return () => {
      // Agrega un listener para la tecla presionada
      window.removeEventListener('keydown', manejarTecla);
    };
  }, [manejarTecla]);

  return (
    <div className="galeria">
      <img src={imagenes[indice]} alt="Galería" className="imagen" />
    </div>
  );
};

export default Galeria;

