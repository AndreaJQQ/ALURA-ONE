
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    console.log(input.parentElement);
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querrySelector(".input-message-error").innerHTML= "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }

};

const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch:
        "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    nacimiento: {
      valueMissing: "Este campo no puede estar vacío",
      customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El formato requerido es xxxxxxxxxx 10 números"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 y 40 caracteres"
      },
      ciudad: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 4 y 30 caracteres"
      },
      estado: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 4 y 30 caracteres"
      },
  };


const validadores ={
    nacimiento: input => validarEdad(input),
};
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }

/*
const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur",(evento)=>{
    validarEdad(evento.target)
});*/

function validarEdad(input){
    const fechaCliente= new Date(input.value);
    const anioIngresado = fechaCliente.getFullYear();

    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();

    let mensaje="";

    if((anioActual-anioIngresado<18)){
        mensaje = "Debes ser mayor de edad!";
    }

    input.setCustomValidity(mensaje);
};

