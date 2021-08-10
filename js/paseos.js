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
                    /* aca se dibujaran los horarios por dias */    

                        <button type="submit" class="btn btn-primary" id="seleccionarPaseo">Confirmar Paseos</button>
                    </div>
                </form>
                
            </div>
            </article>
        </div>
        `
    )
    $("#seleccionarPaseo").on('submit', function (e) {
        e.preventDefault()
        //let dias = $("#pDiasDisponibles option:selected").val()
        //console.log(paseadores.find(cl => cl.personaId === paseadorId))
        
    });

    $("#diasPaseos").html("")
    
    for ( const dia of p.dispoDiaria){
        
        
        $("#diasPaseos").append(
            `
            <label for="f${dia}">Dia ${dia}</label>
                <select class="form-control" id="dia${dia}"> 
                </select>

            `
        )
        for ( const turno of p.dispoHoraria){
        $(`#dia${dia}`).append(
            `
            <option value="${turno}">${turno}</option> 
            `
        )}
    }    
//fin funcion
}