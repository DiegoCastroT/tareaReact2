import React, { useState } from 'react';

function ToggleVisibilidad() {
    const [isVisible, setIsVisible] = useState(false);

    // Función para cambiar la visibilidad
    const changeVisibility = () => {
        setIsVisible(!isVisible); // Alternar el estado
    };

    let contenido;
    let textoBoton;

    // Usando if-else para decidir qué contenido mostrar
    if (isVisible) {
        contenido = <p>¡Este es el contenido visible!</p>;
        textoBoton = 'Ocultar Elemento';
    } else {
        contenido = null;
        textoBoton = 'Mostrar Elemento';
    }

    return (
        <div>
            <button onClick={changeVisibility}>
                {textoBoton}
            </button>
            {contenido}
        </div>
    );
}

export default ToggleVisibilidad;
