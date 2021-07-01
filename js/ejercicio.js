/*Variables Globales*/
// ejercicio 1
/* let suma = 0;
let ingreso= parseInt(prompt("Ingrese un numero para sumarlo , para finalizar ingrese una letra. "));

while(ingreso != 'ESC' && parseInt(ingreso)){
    suma += ingreso
    console.log("La suma de los numeros ingresados es: " + suma)
    ingreso = parseInt(prompt("Ingrese un numero para sumarlo , para finalizar ingrese una letra. "))
}

console.log("terminamos")
 */
//ejercicio 2
let frase = ""
let ingreso = prompt("ingrese una palabra")

while(ingreso.toUpperCase() !== "ESC"){
    frase += ingreso
    console.log("La frase por ahora es: " + suma)
    ingreso = parseInt(prompt("Ingrese otra palabra para sumar a la frase , para finalizar ingrese 'ESC' "))
    }
console.log("su frase es: '" + frase +"'");
