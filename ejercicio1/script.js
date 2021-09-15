console.log("1 - Desplegar todos los dígitos decimales, del 0 al 9, utilizando una estructura de repeticion.")


for (let numero = 0; numero < 9.0; numero=numero+0.1) {
    console.log(numero.toFixed(1));
}