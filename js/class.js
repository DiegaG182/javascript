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
    constructor(nombre,edad,direccion,mail,dispoDiaria,dispoHoraria){
        
        super(nombre,edad,direccion,mail,true);
        //Disponibilidad Diaria, marca los dias que puede pasear este paseador 
        this.dispoDiaria = dispoDiaria;
        //Disponibilidad Horaria, marca los turnos que puede pasear este paseador 
        this.dispoHoraria = dispoHoraria;
        }
    
    obtenerDispoHoraria(){
        return (this.dispoHoraria)
    }
    agendarPaseo(paseo){
        this.paseosAgendados.push(paseo);
        console.log(`Se Ha agendado el paseo de xxx`)
        //${paseo.idPaseo.mostrarNombrePersona()}
    }
    
    obtenerDiasAPasear(){
        paseosTraducidos = [];
        this.dispoDiaria.forEach(el => {
            switch (el.value){
            case '1':
                return paseosTraducidos.push('Lunes')
                break;
            case '2':
                return paseosTraducidos.push('Martes')
                break;
            case '3':
                return paseosTraducidos.push('Miercoles')
                break;
            case '4':
                return paseosTraducidos.push('Jueves')
                break;
            case '5':
                return paseosTraducidos.push('Viernes')
                break;
            default:
                break;    
            }
            return paseosTraducidos
        });

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