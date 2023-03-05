//IMPORTAR EL CODIGO AL CODIGO LOS JS.
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js"

( () => {
const btn = document.querySelector('[data-form-btn]')

const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add("card") //AGRAGA UNA NUEVA CLASE AL ELEMENTO.
    input.value = '';
    const taskContent =document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask= document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value
    taskContent.appendChild(titleTask); // taskContent es el elemento padre y agregamos el hijo titleTask
   
    
  //task.innerHTML = content;
  task.appendChild(taskContent);//COLOCARLOS EN ORDEN TILDE 
  task.appendChild(deleteIcon())
  list.appendChild(task); //AGREGA UN HIJO QUIEN HARA LA TAREA.

};


btn.addEventListener('click', createTask);

}
)();

//para que no esten en el scope global la vamos a ocultar a las funciones.
//para que quede mas seguro el codigo usamos IIFE
// poniendo TOOODO EL CODIDO DENTRO DE UNA FUNCION
//  ( () => {

//   }) (); mandar a llamar inmediatamente.