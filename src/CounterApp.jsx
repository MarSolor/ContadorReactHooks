//! este es el proceso para crear un componente  y se usar el main.jsx
//* yarn add prop-types

//importe de  proptypes //* son validadoees de tipos de datos
import { useState } from "react"; //!hook 
import Proptypes from "prop-types";
import { animateCSS } from "./utils/animate";


//!functional component
//desestructuracion
export const CounterApp = ({ value}) => {
    //se define una vez para aplicar su el valor que se toma del padre al hook y del hook a las funciones constantes

    //!hook que es el use state
    const [counter, setCounter] = useState(value);//0 es valor inicial 0 se  toma el main 
    // funcion para el evento de clic
    const handleAdd = () =>{
        //!utilizar libreria de  animacion
        animateCSS("#contador", "bounce");//contador es el id del h2
        //!cambio de valor
        //setCounter funcion para aumento de valor es un  hook
        setCounter(counter +1);

        //*en el caso de no usar counter
        //setCounter((c) => 200);
    }

    const menosContador = () =>{
        animateCSS("#contador", "bounce");
        setCounter(counter -1);
    }

    const reset = () =>{
        animateCSS("#contador", "bounce");
        setCounter(counter  *0);
    }

    return (
        //para tener varios elementos se necesita un nodo padre //!fragmento div sin nada
        /* /* //!proptypes */
        <>
            <h1>CounterApp</h1>
            <h2 id="contador">{counter}</h2>
            <button onClick= {handleAdd}> Clic:  +1 </button>
            <button onClick= {menosContador}> Clic:  -1 </button>
            <button onClick= {reset}> Reset </button>
        </>
    );
}

//functional component
CounterApp.prototypes = {
    value: Proptypes.number.isRequired, //validacion de isRequired
}
