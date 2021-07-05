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
/* let frase = ""
let ingreso = prompt("ingrese una palabra")

while(ingreso.toUpperCase() !== "ESC"){
    frase += ingreso
    console.log("La frase por ahora es: " + suma)
    ingreso = parseInt(prompt("Ingrese otra palabra para sumar a la frase , para finalizar ingrese 'ESC' "))
    }
console.log("su frase es: '" + frase +"'");
 */


//Calculadora

let opcion = prompt("Seleccione una operacion: 1-Sumar | 2-Restar | 3-Multiplicar | 4-Dividir , para finalizar ingrese '5' ");
                              
while(opcion !== '5' ){
//los tuve que inicializar aca, por qe dentro del switch no podia
    let num1;
    let num2;
    switch (opcion){

        case "1":
            num1 = parseInt(prompt("ingrese el primer numero a Sumar "))
            num2 = parseInt(prompt("ingrese el segundo numero a Sumar "))
            alert("La suma de "+ num1 + " mas " + num2 + " es de: " + (num1+num2)) 
            break
        case "2":
            num1 = parseInt(prompt("ingrese el primer numero a Restar "))
            num2 = parseInt(prompt("ingrese el segundo numero a Restar "))
            alert("La resta de "+ num1 + " menos " + num2 + " es de: " + (num1-num2))
            break    
        case "3":
            num1 = parseInt(prompt("ingrese el primer numero a Multiplicar "))
            num2 = parseInt(prompt("ingrese el segundo numero a Multiplicar "))
            alert("La multiplicacion de "+ num1 + " por " + num2 + " es de: " + (num1*num2))
            break
        case "4":
            num1 = parseFloat(prompt("ingrese el primer numero a dividir "))
            num2 = parseFloat(prompt("ingrese el segundo numero a dividir "))
            if (num2 != 0)
                alert("La division de "+ num1 + " dividido " + num2 + " es de: " + (num1/num2))
            else{alert("No se puede dividir por cero.")}
            break 
        default:    
            alert("Ha ingresado una opcion invalida")
            break
    }
    opcion = prompt("Seleccione una operacion: 1-Sumar | 2-Restar | 3-Multiplicar | 4-Dividir , para finalizar ingrese '5' ")

} 