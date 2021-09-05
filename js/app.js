//const paseadores = [];
//const clientes = []
const JsonCLIENTES = "https://diegag182.github.io/javascript/clientes.json"
const JsonPASEADORES = "https://diegag182.github.io/javascript/paseadores.json"
const JsonMASCOTAS = "https://diegag182.github.io/javascript/mascotas.json"
const JsonPASEOS = "https://diegag182.github.io/javascript/paseos.json"
//Recuperamos los valores de apis o LS

//si ya existen valores, los carga de LocalStorage
 
  //Paseadores
    const paseadoresAlmacenados = JSON.parse(localStorage.getItem("listaPaseadores"));
    if(paseadoresAlmacenados){
      for (const paseador of paseadoresAlmacenados)
          paseadores.push(new Paseador(paseador.nombre,paseador.edad,paseador.direccion,paseador.mail,paseador.dispoDiaria,paseador.dispoHoraria));
      //dibujarPaseadores(paseadores)
    }
  //clientes
    const clientesAlmacenados = JSON.parse(localStorage.getItem("listaClientes"));
    if(clientesAlmacenados){
      for (const cliente of clientesAlmacenados)
        clientes.push(new Cliente(cliente.nombre,cliente.edad,cliente.direccion,cliente.mail,cliente.mascotas));
      //dibujarClientes(clientes)
    }
  
  //mascotas
  const mascotasAlmacenados = JSON.parse(localStorage.getItem("listaMascotas"));
  if(mascotasAlmacenados){
    for (const mascota of mascotasAlmacenados){
      ixOfCl = clientesAlmacenados.findIndex(cl => cl.personaId == mascota.ownerId)
      mascotas.push(new Mascota(clientes[ixOfCl].personaId,mascota.nombre,mascota.edad,mascota.raza));
    }                      
  }
  //paseos
  const paseosAlmacenados = JSON.parse(localStorage.getItem("listaPaseos"));
  if(paseosAlmacenados){
    for (const paseo of paseosAlmacenados){
      // (mascotaId,paseadorId,diaPaseo,horaPaseo,direccionPaseo)
      ixOfPa = paseadoresAlmacenados.findIndex(cl => cl.personaId == paseo.paseadorId)
      paseadorId = paseadores[ixOfPa].personaId
      ixOfMa = mascotasAlmacenados.findIndex(ma => ma.mascotaId == paseo.mascotaId)
      mascotaId = mascotas[ixOfMa].mascotaId
      
      paseos.push(new Paseo(mascotaId,paseadorId,paseo.diaPaseo,paseo.horaPaseo,paseo.direccionPaseo));
    }                      
  }

//obtiene de un JSon estatico para inicializar datos

if(paseadores.length == 0 || clientes.length == 0 || mascotas.length == 0 || paseos.length == 0){
  let clientesJson;
  let paseadoresJson;
  let mascotasJson;
  let paseosJson;


  $.get(JsonPASEADORES, function (respuesta, estado) {
  if(estado === "success"){
    paseadoresJson = respuesta;
    let paseadoresR = [];
    for (const paseador of paseadoresJson) {
        paseadoresR.push(new Paseador(paseador.nombre,paseador.edad,paseador.direccion,paseador.mail,paseador.dispoDiaria,paseador.dispoHoraria))
    }  
  paseadores = paseadoresR  
  guardarLS("listaPaseadores", JSON.stringify(paseadores))

  }
});

$.get(JsonCLIENTES, function (respuesta, estado) {
  if(estado === "success"){
    let clientesR = [];
    clientesJson = respuesta;
    for (const cliente of clientesJson) {
        clientesR.push(new Cliente(cliente.nombre,cliente.edad,cliente.direccion,cliente.mail,cliente.dispoDiaria,cliente.dispoHoraria))
    }  
  clientes = clientesR;  
  guardarLS("listaClientes", JSON.stringify(clientes))
  }
//fin get clientes  
});

$.get(JsonMASCOTAS, function (respuesta, estado) {
  if(estado === "success"){
    let mascotasR = [];
    mascotasJson = respuesta;

    for (const mascota of mascotasJson) {
      ixOfCl = clientesJson.findIndex(cl => cl.personaId == mascota.ownerId)  
      mascotasR.push(new Mascota (clientes[ixOfCl].personaId,mascota.nombre,mascota.edad,mascota.raza))
    }  
    mascotas = mascotasR;  
    guardarLS("listaMascotas", JSON.stringify(mascotas))
  }
});    


$.get(JsonPASEOS, function (respuesta, estado) {
  if(estado === "success"){
    let paseosR = [];
    paseosJson = respuesta;

    for (const paseo of paseosJson) {
      ixOfPa = paseadoresJson.findIndex(pa => pa.personaId == paseo.paseadorId)
      ixOfMa = mascotasJson.findIndex(ma => ma.mascotaId == paseo.mascotaId)
      ixOfCl = clientesJson.findIndex(cl => cl.personaId == mascotasJson[ixOfMa].ownerId)
      
      paseosR.push(new Paseo(mascotas[ixOfMa].mascotaId,paseadores[ixOfPa].personaId,paseo.diaPaseo,paseo.horaPaseo,clientes[ixOfCl].direccion))
    }  
    paseos = paseosR;  
    guardarLS("listaPaseos", JSON.stringify(paseos))
  }
});    

} //if


//Seteo Variables LS
guardarLS = (clave,personas) =>{
    localStorage.setItem(clave,personas) 
}

//505, no tengo permisos para escribir en github, asi que no pude grabar para actualizar los datos.
/* guardarJson = (infoPost,url) => {
  $.post(url, infoPost ,(respuesta, estado) => {
    estado === "success"? console.log("datos guardados" + respuesta.nombre) : console.log("Error al guardar datos")
  });
} */

