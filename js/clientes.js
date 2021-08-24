const clientes = []
mostrarFormularioClientes = () =>{
     
    if($('#contenedorFormClientes').hasClass("displayBlock")){
        ocultarFormularioClientes()
    }else{$('#contenedorFormClientes').addClass("displayBlock")}
    
}
ocultarFormularioClientes = () =>{
    $('#contenedorFormClientes').removeClass("displayBlock")
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
    guardarJson(person);
}

dibujarClientes = (clientes) =>{
    let miHtml = document.querySelector("#clientesContainer");
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
    
    const mascota = new Mascota (ownerId,nombre,edad,raza); 
    clientes.find(cl => cl.personaId === ownerId).agregarMascota(mascota)
    guardarJson(JSON.stringify(clientes));
    ocultarFormularioMascotas();
}