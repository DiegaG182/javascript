$( document ).ready(function() {
    dibujarMascotasDisponibles();
        
});


dibujarMascotasDisponibles = () =>{
    
            
        clientes.forEach(c => {
            if(c.mascotas.length > 0){
                c.mascotas.forEach(m => {
                    $("#mascota-seleccion").append(
                    `
                    <option value="${c.personaId}-${m.mascotaId}">${m.nombre} - ${c.nombre} </option>
                    `
                    )
                });
            }    
        });
    

    $("#seleccionarMascota").on('click', function (e) {
        e.preventDefault()
        let ids = ($("#mascota-seleccion option:selected").val()).split("-");
        let ownerId = ids[0];
        let mascotaId = ids[1];
    });
    dibujarPaseadoresDisponibles();
}


dibujarPaseadoresDisponibles = () =>{
    let miHtml = document.querySelector("#paseadores");
    miHtml.innerHTML = '';
            
    //paseadores.find(cl => cl.personaId === paseadorId).devolverDiasDisponibles
    paseadores.forEach(p => {    
        miHtml.innerHTML +=
        `
        <option value="${p.personaId}">${p.nombre}</option>
        `
        
    }); 
    $("#seleccionarPaseador").on('click', function (e) {
        e.preventDefault()
        let paseadorId = parseInt($("#paseadores option:selected").val())
        dibujarPaseador(paseadores.find(cl => cl.personaId === paseadorId))
        
    });
   
}

dibujarPaseador = (p) => {
    $("#paseadorContainer").html("")
    $("#paseadorContainer").append(
        `
        <div class="box__section">
            <article class="text-center">
            <div class="btn__color">
                <h2>${p.nombre}</h2>
                <form id="formulario-paseo" >
                    <div class="form-group" id="diasPaseos">   

                    </div>
                    <input type="hidden" id="pid" value="${p.personaId}">    
                </form>
                <button type="button" class="btn btn-primary" id="confirmarPaseos">Confirmar Paseos</button>
                    
            </div>
            </article>
        </div>
        `
    );
    $("#confirmarPaseos").on("click", function (e) {
       
        e.preventDefault()
        
        $("#diasPaseos").find("select").each( function(){
            if($(this).children("option:selected").val() != ''){
                console.log($(this).attr("id")) 
                console.log($(this).children("option:selected").val())
                // (mascota,paseador,cliente)
            //horariosSeleccionado.push($(this).children("option:selected").val())
            }
        })
        
    });



    for ( const dia of p.dispoDiaria){
        
        
        $("#diasPaseos").prepend(
            `
            <label for="${dia}">Dia ${dia}</label>
                <select class="form-control" id="${dia}" > 
                </select>

            `
        )
        //inicializar dia vacio
        $(`#${dia}`).prepend(
            `<option value="">Seleccione horario</option>`
        )
        //imprime los horarios de paseo
        for ( const turno of p.dispoHoraria){
        $(`#${dia}`).prepend(
            `
            <option value="${turno}">${turno}</option> 
            `
        )}
    }    
//fin funcion
}