const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};

const completeTask = (event) =>{
  const element = event.target
  element.classList.toggle("fas"); //para que seleccione y desseleccione
  element.classList.toggle("far");//verifica si existe o no la clase y según eso la agrega o no
  element.classList.toggle("completeIcon");

};

export default checkComplete;