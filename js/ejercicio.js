//Calculadora coutas - Clase 4
//[3,6,12] cuotas

/* const interesCuota = [221,210,200];
const iva = 21;
const calcularImpuestos = (precio,impuesto) => { return (precio += precio * impuesto /100);}

let precio = parseFloat(prompt("Ingrese el costo neto del producto"));
if (precio > 0) {
imprimirIva(precio);
listarCuotas(precio)
} else{alert("El importe debe ser mayor a cero")}

function imprimirIva(precio) {
    alert("el precio del producto con iva es de : " + calcularImpuestos(precio,iva))
}

function listarCuotas(precio){
    for(i=3, c=0; c<interesCuota.length ;i*=2, c++){
        alert("el precio final del producto en " + i + " cuotas es de $ " + calcularImpuestos(calcularImpuestos(precio,iva),interesCuota[c]) +  " ,el precio de cada cuota es de $ " + (calcularImpuestos(calcularImpuestos(precio,iva),interesCuota[c])/i))
    }
}
 */

//Creacion de persona para app de entrega de perros
// clase 5
//Objetos

class Persona{
    constructor (nombre,edad,direccion,mail,rol,perro){
        this.nombre = nombre
        this.edad = edad
        this.coordenadas = [direccion[0], direccion[1]]
        this.mail = mail 
        this.rol = rol 
        this.perro = perro
    }

    mostrarPersona(){
        return (this.nombre);
    } 
    mostrarMascota(){
        return (this.perro);
    } 
/*     get nombre(){
        return this.nombre;
    } 
    get coordenadas(){
        return this.coordenadas;
    } 
    get rol(){
        return this.rol;
    } 
    get perro(){
        return this.perro;
    }  */
    
}

agregarPersona = () => {
    nombre = prompt("ingrese su nombre");
    edad = parseInt(prompt("ingrese su edad"));
    direccion = prompt("ingrese su direccion en formato coordenadas [latitud , longitud]");
    mail = prompt("ingrese su mail");
    rol =  prompt("usted es paseador? ingrese true, si ud es usuario ingrese false");
    if (rol == "false"){
        perro = prompt("ingrese el nombre de su mascota nombre"); 
    }else{perro = ""}
    const person = new Persona (nombre,edad,direccion,mail,rol,perro); 
    alert(`se agrego a ${person.mostrarPerssona()} , y su mascota ${person.mostrarMascota()} `);
    return person;
}

let cerrar = true;

while (cerrar){
    let accion = prompt('Elija una opcion a realizar: para agregar una persona esciba: agregar, para finalizar escriba: salir');

    if(accion === "agregar"){
        person = agregarPersona();
        alert(`Bienvenido ${person.mostrarMascota()}`);
    }else if(accion === "salir"){
        console.log("gracias por ingresar sus datos")
        cerrar = false;
        break;        
    }else{ alert('operacion invalida, por favor intentelo nuevamente');}

}
