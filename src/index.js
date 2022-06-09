import React from "react";
import ReactDom from "react-dom";
import App from './App'


//esto recibe 2 parametros que vamos a cargar y donde lo haremos
// index.js es el archivo de configuracion

ReactDom.render(
    <App />,
    document.querySelector("#root")
)