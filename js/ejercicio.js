//Calculadora coutas
//[3,6,12] cuotas
const interesCuota = [221,210,200];
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

