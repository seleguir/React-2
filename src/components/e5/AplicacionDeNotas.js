// 5 - Desarrolla una aplicación de notas que guarde automáticamente el contenido cuando el usuario deja de escribir durante un cierto período de tiempo (setTimeout)

import React, { useState, useEffect } from 'react';
import './AplicacionDeNotas.css'; 

function AplicacionDeNotas() {
    const [note, setNote] = useState(() => {
        // Carga la nota guardada de localStorage al iniciar
        const savedNote = localStorage.getItem('note');
        return savedNote || '';
    });
    const [timer, setTimer] = useState(null);

    const handleNoteChange = (event) => {
        clearTimeout(timer);  
        setNote(event.target.value);  // Actualiza la nota con el valor del textarea
        const newTimer = setTimeout(() => saveNote(), 2000);  // Establece un nuevo timer para guardar la nota
        setTimer(newTimer);  // Guarda el nuevo timer en el estado
    };

    const saveNote = (currentNote) => {
        localStorage.setItem('note', currentNote);  // Guarda la nota en localStorage 
        console.log('Nota guardada:', currentNote);  // Simula guardar la nota
    };

    useEffect(() => {
        return () => clearTimeout(timer);  // Limpia el timer 
    }, [timer]);

    return (
        <div>
            <h1>Aplicación de Notas</h1>
            <textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Escribe aquí tu nota..."
                rows="20"
                cols="50"
            ></textarea>
        </div>
    );
}

export default AplicacionDeNotas;