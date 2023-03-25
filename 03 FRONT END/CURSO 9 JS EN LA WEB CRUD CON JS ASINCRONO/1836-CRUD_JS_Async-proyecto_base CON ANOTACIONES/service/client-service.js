
//abrir http (metodo, url)
//CRUD  METODOS HTTP
//CREATE - POST
//READ   - GET
//UPDATE - PUT/ PUSH
//DELETE - DELETE


//-----------MUCHAS LINEAS------------
/*const listaClientes = () => {
    const promise = new Promise((resolve,reject) => {
        const http = new XMLHttpRequest;
        http.open("GET",  "http://localhost:3000/perfil");
        http.send();
//respuesta del servidor una vez que cargues.
        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status>= 400){
                reject(response)
            }else{
                resolve(response)
            }
        };

    });

    return promise
};*/

//-----------MENOS LINEAS --------por defecto al entrar en url usa el metodo GET
/*const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then((respuesta) => {
        return respuesta.json();
    });
};*/

// -------UNA LINEA
//FETCH API
const listaClientes = () =>  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre, email, id: uuid.v4()}),
    } );
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
   respuesta.json()
    );
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };


  //CONST NOMBRE = (PARAMETROS) => {
    //RETURN FETCH (URL , { method, header {}, body ,}). then ((rta)=> rta). catch((err)=>console.log(err));
  //}
export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};



/*const http = new XMLHttpRequest;
http.open("GET",  "http://localhost:3000/perfil");
http.send();
//respuesta del servidor una vez que cargues.
http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);
};*/


