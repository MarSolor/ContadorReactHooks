import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./styles.css"
//import { HelloWorldApp } from "./HelloWorldApp";


//renderizar app es necesario llamar el  id del  elemento del  index
//!!componente padre!!!!!!!!!
//renderizar app es necesario llamar el  id del  elemento del  index
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>
)