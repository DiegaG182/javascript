const clientes = []
mostrarFormularioClientes = () =>{
    let formulario = document.getElementById('contenedorFormClientes')
    if(formulario.className == "displayNone"){
        formulario.className = "displayBlock"
    }else{ocultarFormularioClientes()}
    
}
ocultarFormularioClientes = () =>{
    let formulario = document.getElementById('contenedorFormClientes')
    formulario.className = "displayNone"
}

agregarCliente = () => {
    let nombre = document.getElementById("cnombre").value
    let edad = document.getElementById("cedad").value
    let direccion = document.getElementById("cdireccion").value
    let mail = document.getElementById("cmail").value
    
    const person = new Cliente (nombre,edad,direccion,mail); 
    clientes.push(person);
    dibujarClientes(clientes);
    ocultarFormularioClientes();
    guardarLS("listaClientes", JSON.stringify(clientes));
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
                <a href="#" onclick="mostrarFormularioMascotas(${el.personaId});return false;">Agregar Mascota</a>
            </div>
            </article>
        </div>
        `
    });
}

mostrarFormularioMascotas = (idOwner) =>{
    let formulario = document.getElementById('contenedorFormMascotas')
    
    if(formulario.className == "displayNone"){
        formulario.className = "displayBlock"
        document.getElementById('mid').value = idOwner
    }else{ocultarFormularioMascotas()
          document.getElementById('mid').value = ""}
}
ocultarFormularioMascotas = () =>{
    let formulario = document.getElementById('contenedorFormMascotas')
    formulario.className = "displayNone"
}

agregarMascota = () => {
    
    let ownerId = parseInt(document.getElementById("mid").value)
    let nombre = document.getElementById("mnombre").value
    let edad = document.getElementById("medad").value
    let raza = document.getElementById("mraza").value
    
    const mascota = new Mascota (ownerId,nombre,edad,raza); 
    clientes.find(cl => cl.personaId === ownerId).agregarMascota(mascota)
    guardarLS("listaClientes", JSON.stringify(clientes));
}