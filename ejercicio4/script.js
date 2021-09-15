
let suma=0;
let resultado=0;

let numero = prompt("Ingresa un numero para realizar las iteraciones");
console.log("iteraciones ingresadas");
console.log(numero);

for (let vueltas = 0;  vueltas< numero; vueltas++) {
    suma=prompt("Ingresa un numero");
    suma=parseInt(suma);
    
    console.log("numeros ingresado");
    console.log(suma);
    
    resultado=resultado+suma;
}
console.log("El resultado de la suma es: " + resultado);
