/* agregarPaseador = () => {
    let nombre = prompt("ingrese su nombre");
    let edad = parseInt(prompt("ingrese su edad"));
    let direccion = prompt("ingrese su direccion");
    let mail = prompt("ingrese su mail");
    let rol =  true;
    let dispoDia = prompt("ingrese los dias que puede realizar un paseo");
    let dispoDiaria = (Array.from(dispoDia))
    let dispoHora = prompt("ingrese los horarios que puede realizar un paseo");
    let dispoHoraria = (Array.from(dispoHora))
    const person = new Paseador (nombre,edad,direccion,mail,rol,dispoDiaria,dispoHoraria); 
    alert(`se agrego al paseador ${person.mostrarNombrePersona()} `);
    return person;
} */
const paseadores = [];


mostrarFormularioPaseadores = () =>{
    let formulario = document.getElementById('contenedorForm')
    formulario.className = "displayBlock"
}
ocultarFormularioPaseadores = () =>{
    let formulario = document.getElementById('contenedorForm')
    formulario.className = "displayNone"
}
agregarPaseador = () =>{
    let nombre = document.getElementById("fnombre").value
    let edad = document.getElementById("fedad").value
    let direccion = document.getElementById("fdireccion").value
    let mail = document.getElementById("fmail").value
    let dispoDia = prompt("ingrese los dias que puede realizar un paseo");
    let dispoDiaria = (Array.from(dispoDia))
    let dispoHora = prompt("ingrese los horarios que puede realizar un paseo");
    let dispoHoraria = (Array.from(dispoHora))
    const person = new Paseador (nombre,edad,direccion,mail,dispoDiaria,dispoHoraria); 
    paseadores.push(person);
    dibujarPaseadores(paseadores);
    ocultarFormularioPaseadores();
}
agregarCliente = () => {
    let nombre = prompt("ingrese su nombre");
    let edad = parseInt(prompt("ingrese su edad"));
    let direccion = prompt("ingrese su direccion");
    let mail = prompt("ingrese su mail");
    
    const person = new Cliente (nombre,edad,direccion,mail); 
    alert(`Bienvenid@  ${person.mostrarNombrePersona()} `);
    return person;
}

agregarMascota = (cliente) => {
    let ownerId = cliente.id;
    let nombre = prompt("ingrese el nombre de su mascota");
    let edad = parseInt(prompt("ingrese la edad de su mascota"));
    let raza = prompt("ingrese la raza de su mascota");
    const mascota = new Mascota (ownerId,nombre,edad,raza); 
    alert(`se agrego a su  mascota ${mascota.mostrarNombreMascota()} `);
    return mascota;
}


crearPaseo = (mascota,paseador,cliente) => {
    let mascotaId = mascota.id;
    let paseadorId = paseador.id;
    let diaPaseo = Array.from(prompt("ingrese el dia que desea pasear a su mascota"));
    let horaPaseo = Array.from(prompt("ingrese el horario que desea pasear a su mascota"));
    let direccionPaseo = cliente.obtenerCoordenadas();
    //console.log(direccionPaseo);
    const paseo = new Paseo (mascotaId,paseadorId,diaPaseo,horaPaseo,direccionPaseo); 
    //agrega el paseo al paseador
    paseador.agendarPaseo(paseo);
    alert(`se agrego el paseo el dia ${paseo.obtenerDia()} en el turno ${paseo.obtenerTurno()} 
           para su  mascota ${mascota.mostrarNombreMascota()} con ${paseador.mostrarNombrePersona()} `);
    return paseo;
}

dibujarPaseadores = (paseadores) =>{
    let miHtml = document.querySelector("#paseadoresContainer");
    miHtml.innerHTML = '';
            
    paseadores.forEach(el => {
        
        miHtml.innerHTML +=
        `
        <div class="box__section">
            <article class="text-center">
            <div class="btn__color">
                <h2>${el.nombre}</h2>
                <h3>${el.ObtenerRolPersona()}</h3>
                <a href="#">Mas Info</a>
            </div>
            </article>
        </div>
        `
        
    });
}
