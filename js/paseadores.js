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
    let formulario = document.getElementById('contenedorFormPaseadores')
    if(formulario.className == "displayNone"){
        formulario.className = "displayBlock"
    }else{ocultarFormularioPaseadores()}
}
ocultarFormularioPaseadores = () =>{
    let formulario = document.getElementById('contenedorFormPaseadores')
    formulario.className = "displayNone"
}
agregarPaseador = () =>{
    let nombre = document.getElementById("pnombre").value
    let edad = document.getElementById("pedad").value
    let direccion = document.getElementById("pdireccion").value
    let mail = document.getElementById("pmail").value
    let dias = document.querySelectorAll('#pdiasDisponibles option:checked');
    let dispoDiaria = Array.from(dias).map(el => el.value);
    let horas = document.querySelectorAll('#phorariosDisponibles option:checked');
    let dispoHoraria =Array.from(horas).map(el => el.value);

    const person = new Paseador (nombre,edad,direccion,mail,dispoDiaria,dispoHoraria); 
    paseadores.push(person);
    dibujarPaseadores(paseadores);
    ocultarFormularioPaseadores();
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
