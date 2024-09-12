// 3 - Desarrolla un juego donde el usuario adivine un número aleatorio. Muestra mensajes de "más alto" o "más bajo" en función de la suposición del usuario. (submit)

import React, { useState, useEffect } from 'react';
import './Juego.css'; 

function Juego() {
    // Estado para almacenar el número aleatorio, la suposición del usuario y el mensaje de feedback
    const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
    const [suposicion, setSuposicion] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Función para manejar el cambio en el campo de entrada
    const handleChange = (e) => {
        setSuposicion(e.target.value);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const suposicionNumerica = parseInt(suposicion, 10);
        if (suposicionNumerica < numeroAleatorio) {
            setMensaje('Más alto');
        } else if (suposicionNumerica > numeroAleatorio) {
            setMensaje('Más bajo');
        } else {
            setMensaje('¡Correcto!');
        }
    };

    // Reiniciar el juego
    const handleReset = () => {
        setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
        setMensaje('');
        setSuposicion('');
    };

    return (
        <div className="juego">
            <h1>Adivina el número aleatorio</h1>
            <p>Intentá adivinar el número entre 1 y 100!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={suposicion}
                    onChange={handleChange}
                    min="1"
                    max="100"
                />
                <button type="submit">Adivinar</button>
                <button type="button" onClick={handleReset}>Reiniciar</button>
            </form>
            {mensaje && <p className="mensaje">{mensaje}</p>}
        </div>
    );
}

export default Juego;