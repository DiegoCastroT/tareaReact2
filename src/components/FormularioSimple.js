import React, { useState } from 'react';

function FormularioSimple() {
    const [nombre, setNombre] = useState(""); 
    const [mensaje, setMensaje] = useState(""); 

    const addName = (event) => {
        event.preventDefault(); 
        setMensaje(`¡Bienvenido, ${nombre}!`); 
    }

    return (
        <div>
            <form onSubmit={addName}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        required
                    />
                </label>
                <button type='submit'>Enviar</button>
            </form>
             <p>{mensaje}</p>
        </div>
    );
}

export default FormularioSimple;
