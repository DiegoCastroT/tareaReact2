import React, { useState } from 'react';

function ToggleVisibilidad() {
    const [isVisible, setIsVisible] = useState(false);

    // Función para cambiar la visibilidad
    const changeVisibility = () => {
        setIsVisible(!isVisible); // Alternar el estado
    };

    let contenido; 

    // Usando if-else para decidir qué contenido mostrar
    if (isVisible) {
        contenido = <p>¡Este es el contenido visible!</p>;
    } else {
        contenido = null; 
    }

    return (
        <div>
            <button onClick={changeVisibility}>
                {isVisible ? 'Ocultar' : 'Mostrar'} Elemento
            </button>
            {contenido} 
        </div>
    );
}

export default ToggleVisibilidad;
