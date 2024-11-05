import React, { useState } from 'react';

function BuscadorDeProductos() {
    const [productos] = useState([
        { id: 1, nombre: 'Laptop' },
        { id: 2, nombre: 'Teléfono' },
        { id: 3, nombre: 'Tablet' },
        { id: 4, nombre: 'Monitor' },
        { id: 5, nombre: 'Teclado' },
    ]);
    
    const [busqueda, setBusqueda] = useState('');

    const manejarCambio = (event) => {
        setBusqueda(event.target.value); 
    };

    // Filtrar los productos según la búsqueda
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h2>Buscador de Productos</h2>
            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={manejarCambio} 
            />
            <ul>
                {productosFiltrados.map(producto => (
                    <li key={producto.id}>{producto.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default BuscadorDeProductos;
