let clientes = []
let mascotas = [];
mostrarFormularioClientes = () =>{

    if($('#contenedorFormClientes').hasClass("displayNone")){
        $('#contenedorFormClientes').fadeIn(2000, function(){
            ocultarFormularioPaseadores();
            $("#titulo").html("<h1>Formulario Agregar Cliente</h1>")
            $('#contenedorFormClientes').removeClass("displayNone")    
            
        })
    }else{ocultarFormularioClientes()}
};    
ocultarFormularioClientes = () =>{
    $('#contenedorFormClientes').fadeOut("slow", function(){
      /*    */
        $('#contenedorFormClientes').addClass("displayNone")
      
        if($('#contenedorFormClientes').hasClass("displayNone") && $('#contenedorFormPaseadores').hasClass("displayNone") ){
            $("#titulo").html("<h1>Manada Unida</h1> ")
        }
    })
}

agregarCliente = () => {
    let nombre = $("#cnombre").val()
    let edad = $("#cedad").val()
    let direccion = $("#cdireccion").val()
    let mail = $("#cmail").val()
    
    const person = new Cliente (nombre,edad,direccion,mail); 
    clientes.push(person);
    dibujarClientes(clientes);
    ocultarFormularioClientes();
    guardarLS("listaClientes", JSON.stringify(clientes))
}

eliminarCliente = (id) => {
    clientes = clientes.filter( persona => persona.personaId != id)
    dibujarClientes(clientes);
    guardarLS("listaClientes", JSON.stringify(clientes))
}

dibujarClientes = (clientes) =>{
    let miHtml = document.querySelector("#personasContainer");
    miHtml.innerHTML = '';
            
    clientes.forEach(el => {
        
        miHtml.innerHTML +=
        `
        <div class="box__section">
            <article class="text-center">
            <div class="btn__color">
                <h2>${el.nombre}</h2>
                <h3>${el.ObtenerRolPersona()}</h3>
                <a href="#containerMascotas" onclick="mostrarFormularioMascotas(${el.personaId});return false;">Agregar Mascota</a>
                <a href="#containerMascotas" onclick="eliminar${el.ObtenerRolPersona()}(${el.personaId});return false;" >Eliminar</a>
            </div>
            </article>
        </div>
        `
    });
}

mostrarFormularioMascotas = (idOwner) =>{
    if($('#contenedorFormMascotas').hasClass("displayBlock")){
        ocultarFormularioMascotas()
    }else{$('#contenedorFormMascotas').show()
          $('#mid').val(idOwner)    
    }
}
ocultarFormularioMascotas = () =>{
    $('#contenedorFormMascotas').hide();
}

agregarMascota = () => {
    
    let ownerId = parseInt($("#mid").val())
    let nombre = $("#mnombre").val()
    let edad = $("#medad").val()
    let raza = $("#mraza").val()
    
    const mascota = new Mascota(ownerId,nombre,edad,raza);  
    mascotas.push(mascota)
    guardarLS("listaMascotas", JSON.stringify(mascotas))
    ocultarFormularioMascotas();
}