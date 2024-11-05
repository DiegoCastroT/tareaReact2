import React, { useState } from 'react';

function ListaDeTareas() {
    const [tareas, setTareas] = useState([
        { id: 1, nombre: 'Comprar', completada: false },
        { id: 2, nombre: 'Lavar la ropa', completada: false },
        { id: 3, nombre: 'Hacer ejercicio', completada: false },
    ]);

    const manejarCambio = (id) => {
        const nuevasTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada }; 
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={tarea.completada}
                                onChange={() => manejarCambio(tarea.id)}
                            />
                            {tarea.nombre}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTareas;
