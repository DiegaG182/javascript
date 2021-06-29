/*Constantes*/
const generoF = "Femenino";
const generoM = "Masculino";
const generoO = "Otro";
const edadJubHombre = 65;
const edadJubMujer = 60;

/*Variables Globales*/
let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let genero = prompt("Ingrese su Genero: Femenino | Masculino | Otro  ");


if(genero === generoF || genero === generoM || genero === generoO  ){
    if ((genero == generoF && edad >= edadJubMujer ) || ((genero == generoM || genero == generoO) && edad >= edadJubHombre )){
        alert("Felicitaciones ud deberia ser Jubilado")
    }else if(genero == generoF){
            //Variable del ifs
            var jubilacion = edadJubMujer - edad
            alert(nombre + " le restan " + jubilacion + " años para jubilarse")
        }else{
            jubilacion = edadJubHombre - edad
            alert(nombre + " le restan " + jubilacion + " años para jubilarse")
        }
    if (jubilacion >= 0 && jubilacion <= 5 ){
        console.log("Fuerza, te restan pocos años mas")
    } else{ console.log("Animos, a seguir aportando!!!")}
    
}else{alert("Genero incorrecto")} 