let cerrar = true;
const paseadores = [];
const clientes = []
/* while (cerrar){
    let accion = prompt('Elija una opcion a realizar: para agregar un Paseador esciba: paseador, para agregar un cliente escriba: cliente , para finalizar escriba: salir');
    let paseador;
    let person;
    let mascota;


    switch (accion){
        case 'paseador':
            paseador = agregarPaseador();
            paseadores.push(paseador);
            alert(`Bienvenid@  ${paseador.mostrarNombrePersona()} a nuestra red de Paseadores`);
            console.log(paseadores);
            break;
        case 'cliente':
            person = agregarCliente();
            alert(`Bienvenid@  ${person.mostrarNombrePersona()} a nuestra comunidad de Paseo para tu mascota`);
            mascota = agregarMascota(person);
            clientes.push(person)
            paseo = prompt(`si desea Agregar un paseo para su mascota ${mascota.mostrarNombreMascota()} ecriba: si `)
            if (paseo.toUpperCase() === 'SI' ){crearPaseo(mascota,paseadores[0],person)}else{alert('Puede agregar su paseo cuando lo desee');}
            break;
        case 'paseo':
            crearPaseo(mascota,paseador,person);
            break;
        case 'salir':    
            console.log("gracias por utilizar nuestros servicios")
            cerrar = false;
            break;
        default:
            alert('operacion invalida, por favor intentelo nuevamente');
            break;    
    }
    
}//while
 */
//Ordenar a los paseadores por edad descendente y devolveros por consola.

paseadores.sort( (a,b) =>{
        if(a.edad < b.edad) {
          return 1;
        }
        if(a.edad > b.edad) {
          return -1;
        }
        return 0;
});

dibujarPaseadores(paseadores);