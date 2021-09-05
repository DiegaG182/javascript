$(document).ready(function() {
    dibujarMascotasDisponibles();
      
});


dibujarMascotasDisponibles = () =>{ 
    mascotas.forEach(m => {
        owner = clientes.find(cl => cl.personaId == m.ownerId)
        $("#mascota-seleccion").append(
        `<option value="${owner.personaId}-${m.mascotaId}">${owner.nombre} - ${m.nombre} </option>`
        )
    });    

    $("#seleccionarMascota").on('click', function (e) {
        e.preventDefault()
        $("#paseadoresElegiblesContainer").show();
        dibujarPaseadoresDisponibles(); 
    
    });
    
}


dibujarPaseadoresDisponibles = () =>{
 
    let miHtml = document.querySelector("#paseadores");
    miHtml.innerHTML = '';
            
    paseadores.forEach(p => {    
        miHtml.innerHTML +=
        `
        <option value="${p.personaId}">${p.nombre}</option>
        `
        
    }); 
    $("#seleccionarPaseador").on('click', function (e) {
        e.preventDefault()
        let paseadorId = parseInt($("#paseadores option:selected").val())
        dibujarPaseador(paseadores.find(cl => cl.personaId == paseadorId))
        
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

        let ids = ($("#mascota-seleccion option:selected").val()).split("-");
        let ownerId = ids[0];
        let mascotaId = ids[1];
        let paseadorId = $("#pid").val();
        let dias = [];
        let horas = []
        //Recorre los dias para obtener si se selecciono alguno con horario valido.    
        $("#diasPaseos").find("select").each( function(){

            if($(this).children("option:selected").val() != ''){
                let diaPaseo = $(this).attr("id"); 
                let horaPaseo = $(this).children("option:selected").val()
                
                dias.push(diaPaseo)
                horas.push(horaPaseo)
            }    
        });

        crearPaseo(mascotaId,paseadorId,ownerId,dias,horas)

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

dibujarPaseadoresPaseos =  () => {
    let miHtml = document.querySelector("#paseador-seleccion");
    miHtml.innerHTML = '';
            
    paseadores.forEach(p => {    
        miHtml.innerHTML +=
        `
        <option value="${p.personaId}">${p.nombre}</option>
        `
        
    });
    $("#paseadoresPaseosContainer").toggle()

    $("#seleccionarPaseadorPaseo").on('click', function (e) {
        e.preventDefault()
        
        dibujarPaseos($("#paseador-seleccion option:selected").val()); 
        
    });
    
}
//seguir para dibujar los paseos
dibujarPaseos = (idPaseador) => {
    p = paseadores.find(pa => pa.personaId == idPaseador)
    $("#paseosContainer").html("")
    $("#paseosContainer").append(
        `
        <div class="box__section" id="detallePaseo">
                <h2>${p.nombre}</h2>
        `)            
    
    paseosPaseador = paseos.filter(paseo => paseo.paseadorId == idPaseador)
    if(paseosPaseador.length > 0){
        for (const paseo of paseosPaseador){
            mascota = mascotas.find(ma => ma.mascotaId == paseo.mascotaId)
            $("#detallePaseo").append(
                `
                <div class="box__section">
                <h2>${paseo.diaPaseo} - ${paseo.horaPaseo} </h2>
                <h2>${mascota.nombre}</h2>
                <h3>${paseo.direccionPaseo}</h3>
                <div>
                `
            )    
        }
    }else{$("#detallePaseo").append(`<h2>No posee paseos activos</h2>`)}
    $("#paseadoresPaseosContainer").hide();
}

