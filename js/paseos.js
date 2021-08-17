$( document ).ready(function() {
    dibujarPaseadoresDisponibles();    
});



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
            //horariosSeleccionado.push($(this).children("option:selected").val())
            }
        })
        /* console.log($("#diasPaseos").parent().children()) */
        //let dias = $("#pDiasDisponibles option:selected").val()
        //console.log(paseadores.find(cl => cl.personaId === paseadorId))
        
    });

/*     $("#diasPaseos").html("") */

    for ( const dia of p.dispoDiaria){
        
        
        $("#diasPaseos").prepend(
            `
            <label for="f${dia}">Dia ${dia}</label>
                <select class="form-control" id="dia${dia}"> 
                </select>

            `
        )
        //inicializar dia vacio
        $(`#dia${dia}`).prepend(
            `<option value="">Seleccione horario</option>`
        )
        //imprime los horarios de paseo
        for ( const turno of p.dispoHoraria){
        $(`#dia${dia}`).prepend(
            `
            <option value="${turno}">${turno}</option> 
            `
        )}
    }    
//fin funcion
}