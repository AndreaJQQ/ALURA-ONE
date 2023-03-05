import { valida } from "./validaciones.js";

//agregar el addEventListener que va a mandar a llamar esta funcion cada vez que salga el usuario del inpunt.
// primero hacer una constante inputs para que seleccione todo los inputs.

const inputs = document.querySelectorAll("input");
//es un arreglo por lo tanto lo puedo iterar.
inputs.forEach(input => {
    input.addEventListener("blur",(input)=>{
        valida(input.target);
    });
});
//seleccionamos todos los inputs y agrega el addEventListener y
// cuando salga de foco va a ir a validar.
//verifica el tipo de input según el tipo.