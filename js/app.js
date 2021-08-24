//const paseadores = [];
//const clientes = []
const JsonCLIENTES = "https://diegag182.github.io/javascript/clientes.json"
const JsonPASEADORES = "https://diegag182.github.io/javascript/paseadores.json"
const JsonMASCOTAS = "https://diegag182.github.io/javascript/mascotas.json"
const JsonPASEOS = "https://diegag182.github.io/javascript/paseos.json"

//Recuperamos los valores de LS
//Paseadores
$( document ).ready(function() {

//Paseadores
  const paseadoresAlmacenados = JSON.parse(localStorage.getItem("listaPaseadores"));
  if(paseadoresAlmacenados){
    for (const paseador of paseadoresAlmacenados)
        paseadores.push(new Paseador(paseador.nombre,paseador.edad,paseador.direccion,paseador.mail,paseador.dispoDiaria,paseador.dispoHoraria));
  }
//clientes
  const clientesAlmacenados = JSON.parse(localStorage.getItem("listaClientes"));
  if(clientesAlmacenados){
    for (const cliente of clientesAlmacenados)
    clientes.push(new Cliente(cliente.nombre,cliente.edad,cliente.direccion,cliente.mail,cliente.mascotas));
    
  }

  if(paseadores){
  $.get(JsonPASEADORES, function (respuesta, estado) {
    if(estado === "success"){
      let paseadoresJson = respuesta;
      let paseadoresR = [];
      for (const paseador of paseadoresJson) {
          paseadoresR.push(new Paseador(paseador.nombre,paseador.edad,paseador.direccion,paseador.mail,paseador.dispoDiaria,paseador.dispoHoraria,paseador.paseos))
      }  
    dibujarPaseadores(paseadoresR)
    }
  });
  }
  if(clientes){
  $.get(JsonCLIENTES, function (respuesta, estado) {
    if(estado === "success"){
      let clientesR = [];
      let clientesJson = respuesta;
      for (const cliente of clientesJson) {
          clientesR.push(new Cliente(cliente.nombre,cliente.edad,cliente.direccion,cliente.mail,cliente.dispoDiaria,cliente.dispoHoraria,cliente.mascotas))
      }  
    }
  });
  }
});





//Seteo Variables LS
guardarLS = (clave,personas) =>{
    localStorage.setItem(clave,personas) 
}

//505, no tengo permisos para escribir en github
/* guardarJson = (infoPost,url) => {
  $.post(url, infoPost ,(respuesta, estado) => {
    estado === "success"? console.log("datos guardados" + respuesta.nombre) : console.log("Error al guardar datos")
  });
} */

