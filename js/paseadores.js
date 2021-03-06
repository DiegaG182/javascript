let paseadores = [];
let paseos = [];


mostrarFormularioPaseadores = () =>{

    if($('#contenedorFormPaseadores').hasClass("displayNone")){
        $('#contenedorFormPaseadores').fadeIn(2000, function(){
            ocultarFormularioClientes();  
            $("#titulo").html("<h1>Formulario Agregar Paseador</h1>")
            $('#contenedorFormPaseadores').removeClass("displayNone")  
            
        })
    }else{ocultarFormularioPaseadores()}
};    
ocultarFormularioPaseadores = () =>{
    $('#contenedorFormPaseadores').fadeOut("slow", function(){
        $('#contenedorFormPaseadores').addClass("displayNone")
        if($('#contenedorFormClientes').hasClass("displayNone") && $('#contenedorFormPaseadores').hasClass("displayNone") ){
            $("#titulo").html("<h1>Manada Unida</h1> ")
        }
        
    })
}
agregarPaseador = () =>{
    let nombre = $("#pnombre").val()
    let edad = $("#pedad").val()
    let direccion = $("#pdireccion").val()
    let mail = $("#pmail").val()
    let dias = document.querySelectorAll('#pdiasDisponibles option:checked');
    let dispoDiaria = Array.from(dias).map(el => el.value);
    let horas = document.querySelectorAll('#phorariosDisponibles option:checked');
    let dispoHoraria =Array.from(horas).map(el => el.value);

    const person = new Paseador (nombre,edad,direccion,mail,dispoDiaria,dispoHoraria); 
    paseadores.push(person);
    dibujarPaseadores(paseadores);
    ocultarFormularioPaseadores();
    guardarLS("listaPaseadores", JSON.stringify(paseadores))
}
 
eliminarPaseador = (id) => {
    paseadores = paseadores.filter( persona => persona.personaId != id)
    dibujarPaseadores(paseadores);
    guardarLS("listaPaseadores", JSON.stringify(paseadores))
}

crearPaseo = (mascotaId,paseadorId,clienteId,diasPaseos,horasPaseo) => {
             
    let direccionPaseo = clientes.find(cl => cl.personaId === parseInt(clienteId)).obtenerCoordenadas();

    const paseo = new Paseo(mascotaId,paseadorId,diasPaseos,horasPaseo,direccionPaseo); 
    paseos.push(paseo);
    guardarLS("listaPaseos", JSON.stringify(paseos))
}

dibujarPaseadores = (paseadores) =>{
    let miHtml = document.querySelector("#personasContainer");
    miHtml.innerHTML = ` `;
            
    paseadores.forEach(el => {
        
        miHtml.innerHTML +=
        `
        <div class="box__section">
            <article class="text-center">
            <div class="btn__color">
                <h2>${el.nombre}</h2>
                <h3>${el.ObtenerRolPersona()}</h3>
                <a href="#" onclick="eliminar${el.ObtenerRolPersona()}(${el.personaId});" >Eliminar</a>
            </div>
            </article>
        </div>
        `
    });

}



