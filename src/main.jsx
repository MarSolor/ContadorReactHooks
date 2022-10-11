import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./styles.css"
//import { HelloWorldApp } from "./HelloWorldApp";


//renderizar app es necesario llamar el  id del  elemento del  index
//!!componente padre!!!!!!!!!
//renderizar app es necesario llamar el  id del  elemento del  index
ReactDOM.createRoot(document.getElementById('root')).render(
    //componente hijo counterApp que se debe de crear como .jsx
    ///se define el value un elemento del padre como variable, arreglo, objeto o funcion
    //de cero que sera llamado a por el .jsx
    <React.StrictMode>
        <CounterApp value={0}/>git
    </React.StrictMode>
)