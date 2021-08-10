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
    clientes.push(new Cliente(cliente.nombre,cliente.edad,cliente.direccion,cliente.mail));
  }
});




//Seteo Variables LS
guardarLS = (clave,personas) =>{
    localStorage.setItem(clave,personas) 
}














//Ordenar a los paseadores por edad descendente y devolveros por consola.
/* 
paseadores.sort( (a,b) =>{
        if(a.edad < b.edad) {
          return 1;
        }
        if(a.edad > b.edad) {
          return -1;
        }
        return 0;
}); */

