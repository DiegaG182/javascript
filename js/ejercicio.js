//Creacion de persona para app de entrega de perros
personaId = 1;
mascotaId = 1;
paseoId = 1;
class Persona{
    constructor (nombre,edad,direccion,mail,rol){
        this.personaId = personaId++;
        this.nombre = nombre;
        this.edad = edad;
        this.coordenadas = direccion;
        this.mail = mail ;
        //Rol: true = Paseador | false = cliente
        this.rol = rol ;
    }

    mostrarNombrePersona(){
        return (this.nombre);
    } 
    ObtenerRolPersona(){
        if(this.rol) {return 'Paseador'} else{return 'Cliente'}
    }
    obtenerCoordenadas(){
        return (this.coordenadas)
    }

}

class Paseador extends Persona{
    paseosAgendados = [];
    constructor(nombre,edad,direccion,mail,dispoDiaria,dispoHoraria/* , cantidadDePaseos */){
        
        super(nombre,edad,direccion,mail,true);
        //Disponibilidad Diaria, marca los dias que puede pasear este paseador 
        this.dispoDiaria = dispoDiaria;
        //Disponibilidad Horaria, marca los turnos que puede pasear este paseador 
        this.dispoHoraria = dispoHoraria;
        }
    
    obtenerDispoDiaria(){
        return (this.dispoDiaria)
    }
    obtenerDispoHoraria(){
        return (this.dispoHoraria)
    }
    agendarPaseo(paseo){
        this.paseosAgendados.push(paseo);
        console.log(`Se Ha agendado el paseo de xxx`)
        //${paseo.idPaseo.mostrarNombrePersona()}
    }
    obtenerPaseosAgendados(){

    }
}

class Cliente extends Persona{
    mascotas = [];
    constructor(nombre,edad,direccion,mail){
        super(nombre,edad,direccion,mail,false);    
    }
    agregarMascota(mascota){
        this.mascotas.push(mascota)
    }
}


class Mascota {
    constructor (ownerId,nombre,edad,raza){
        this.mascotaId = mascotaId++;
        this.ownerId = ownerId;
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }    
    mostrarNombreMascota(){
        return (this.nombre);
    } 
}

class Paseo{
    constructor (mascotaId,paseadorId,diaPaseo,horaPaseo,direccionPaseo){
        this.paseoId = paseoId++;
        this.mascotaId = mascotaId;
        this.paseadorId = paseadorId;
        this.diaPaseo = diaPaseo;
        this.horaPaseo = horaPaseo;
        this.direccionPaseo = direccionPaseo;
    } 
    obtenerDia(){
        console.log(this.diaPaseo);
        switch (this.diaPaseo[0]){
            case '1':
                return 'Lunes'
                break;
            case '2':
                return 'Martes'
                break;
            case '3':
                return 'Miercoles'
                break;
            case '4':
                return 'Jueves'
                break;
            case '5':
                return 'Viernes'
                break;
            case '6':
                return 'Sabado'
                break;
            case '7':
                return 'Domingo'
                break;
            default:
                break;    
        }
    }    
    obtenerTurno(){
        console.log(this.horaPaseo[0]);
        console.log("es un array de obtener turno");
        switch (this.horaPaseo[0]){
            case '1':
            return 'Mañana'
                break;
            case '2':
                return 'Mediodia'
                break;
            case '3':
                return 'Tarde'
                break;
            default:
                break;    
        }
    }
}

agregarPaseador = () => {
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
}

agregarCliente = () => {
    let nombre = prompt("ingrese su nombre");
    let edad = parseInt(prompt("ingrese su edad"));
    let direccion = prompt("ingrese su direccion");
    let mail = prompt("ingrese su mail");
    
    const person = new Cliente (nombre,edad,direccion,mail); 
    alert(`Bienvenid@  ${person.mostrarNombrePersona()} `);
    return person;
}

agregarMascota = (cliente) => {
    let ownerId = cliente.id;
    let nombre = prompt("ingrese el nombre de su mascota");
    let edad = parseInt(prompt("ingrese la edad de su mascota"));
    let raza = prompt("ingrese la raza de su mascota");
    const mascota = new Mascota (ownerId,nombre,edad,raza); 
    alert(`se agrego a su  mascota ${mascota.mostrarNombreMascota()} `);
    return mascota;
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
    paseadores.forEach(el => {
        let miHtml = document.querySelector("#paseadoresContainer");
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






let cerrar = true;
const paseadores = [];
const clientes = []
while (cerrar){
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
console.log(paseadores);
dibujarPaseadores(paseadores);