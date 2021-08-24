//const paseadores = [];
//const clientes = []

//Recuperamos los valores de LS
//Paseadores
$( document ).ready(function() {

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
});




//Seteo Variables LS
guardarLS = (clave,personas) =>{
    localStorage.setItem(clave,personas) 
}



const GETPASEADORES = "https://diegag182.github.io/javascript/paseadores.json"
$.get(GETPASEADORES, function (respuesta, estado) {
  if(estado === "success"){
    let paseadoresR = [];
    let paseadoresJson = respuesta;
    for (const paseador of paseadoresJson) {
        paseadoresR.push(new Paseador(paseador.nombre,paseador.edad,paseador.direccion,paseador.mail,paseador.dispoDiaria,paseador.dispoHoraria,paseador.paseos))
    }  
    dibujarPaseadores(paseadoresR);
  }

});
const GETCLIENTES = "https://diegag182.github.io/javascript/clientes.json"
$.get(GETCLIENTES, function (respuesta, estado) {
  if(estado === "success"){
    let clientesR = [];
    let clientesJson = respuesta;
    for (const paseador of clientesJson) {
        clientesR.push(new Paseador(paseador.nombre,paseador.edad,paseador.direccion,paseador.mail,paseador.dispoDiaria,paseador.dispoHoraria,paseador.paseos))
    }  
    dibujarPaseadores(paseadoresR);
  }

});