//Creacion de persona para app de paseo de perros
personaId = 1;
mascotaId = 1;
paseoId = 1;
class Persona{
    constructor (nombre,edad,direccion,mail,rol){
        this.personaId = personaId++;
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.mail = mail ;
        //Rol: true = Paseador | false = cliente
        this.rol = rol ;
    }

    mostrarNombrePersona(){
        return (this.nombre);
    } 
    ObtenerRolPersona(){
    //    this.rol ? "Paseador" : "Cliente"
        if(this.rol) {return "Paseador"}else{return "Cliente"}
    }

}

class Paseador extends Persona{
    
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
    
}



class Cliente extends Persona{
    
    constructor(nombre,edad,direccion,mail,){
        super(nombre,edad,direccion,mail,false); 
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
    
}