import React, { useState } from 'react';

function Contador() {
    // Use useState to save contador value
    const [contador, setContador] = useState(0);

    // Increment function
    const incrementar = () => {
        setContador(contador + 1); // Sumar 1 al contador actual
    }

    // Decrement function
    const decrementar = () => {
        setContador(contador - 1); // Restar 1 al contador actual
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default Contador;
