import './App.css';
import ToogleVisibilidad from "./components/ToogleVisibilidad";
import FormularioSimple from "./components/FormularioSimple";
import ListaTareas from "./components/ListaTareas";
import Contador from "./components/Contador";
import BuscadorProductos from "./components/BuscadorProductos";

/**
 * Crea un proyecto React , donde el componente App nos enlace a cada uno de los siguientes ejercicios:
Ejercicio 1)  Componente Contador: Crea un componente que muestre un número y dos botones: uno para incrementar y otro para decrementar el número.
Ejercicio 2) Componente Formulario simple: Construye un formulario que capture el nombre de un usuario y lo muestre en un mensaje de bienvenida al enviar el formulario.
Ejercicio 3) Componente Toggle de visibilidad: Crea un componente que muestre y oculte un elemento al hacer clic en un botón.
 Ejercicio 4) Componente Lista de tareas: Implementa una lista de tareas donde cada tarea tenga un checkbox para marcarla como completada.
Ejercicio 5) Componente Buscador de productos: Crea un componente que filtre una lista de productos en función de una palabra clave ingresada por el usuario.
 */
function App() {
    return(
        <div>
            <ToogleVisibilidad/>
            <FormularioSimple/>
            <ListaTareas/>
            <Contador/>
            <ToogleVisibilidad/>
            <BuscadorProductos/>
        </div>
    )
}

export default App;
