const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {

            resolve(answer)

        });
    });
}


// FUNCION QUE SUMA LOS NUMEROS

function sumar(arrayNumeros) {

    let resultado = 0;

    // sumamos todos los valores del array uno por uno
    for (i = 0; i < arrayNumeros.length; i++) {

        resultado = resultado + arrayNumeros[i]
    }

    // devolvemos el resultado
    return resultado;
};


// FUNCION QUE RESTA LOS NUMEROS

function restar(arrayNumeros) {


    let resultado = 0;

    // restamos todos los valores del array uno por uno
    for (i = 0; i < arrayNumeros.length; i++) {

        if (i == 0) {
            resultado = arrayNumeros[0]
        } else {

            resultado = resultado - arrayNumeros[i]
        }
    }

    // devolvemos el resultado
    return resultado;
};


// FUNCION QUE MULTIPLICA LOS NUMEROS

function multiplicar(arrayNumeros) {
    let resultado = 0;

    for (i = 0; i < arrayNumeros.length; i++) {

        if (i == 0) {
            resultado = arrayNumeros[0]
        } else {

            resultado = resultado * arrayNumeros[i]
        }
    }

    return resultado;
};

// FUNCION QUE DIVIDE LOS NUMEROS

function dividir(arrayNumeros) {

    let resultado = 0;

    for (i = 0; i < arrayNumeros.length; i++) {

        if (i == 0) {
            resultado = arrayNumeros[0]
        } else {

            resultado = resultado / arrayNumeros[i]
        }
    }

    return resultado;

};







async function main() {

    // Aca pide la operacion
    let operacion = await input("Que operacion matematica desea realizar?\n\n Ingrese 1 para SUMAR\n Ingrese 2 para RESTAR\n Ingrese 3 para MULTIPLICAR\n Ingrese 4 para DIVIDIR\n");


    switch (operacion) {

        case "1":
            console.log("SE HA SELECCIONADO LA OPERACION SUMAR\n\n");

            // pide la cantidad de operandos que se van a utilizar
            const cantidadOperandosSuma = await input("Cuantos numeros desea utilizar, a partir de 2 numeros\n\n")

            // verifica que la cantidad de operandos sea a partir de 2
            if (parseInt(cantidadOperandosSuma) <= 1) {
                console.log("Cantidad de operandos invalida, saliendo del sistema\n\n");
                break;
            }

            // declaramos el array de numeros vacio
            let arrayNumerosSuma = [];


            //le pide al usuario que ingrese un numero y se va almacenando en el array
            for (i = 0; i < parseInt(cantidadOperandosSuma); i++) {
                const numeroSuma = await input("Ingrese numero\n\n");
                arrayNumerosSuma[i] = parseInt(numeroSuma);
            }

            //invocamos la funcion que va a sumar los digitos y le pasamos como parametro del array de numeros    
            const resultadoSuma = sumar(arrayNumerosSuma);

            // mostramos el resultado
            console.log("El resultado de la suma es: ", resultadoSuma);

            break;

        case "2":
            console.log("SE HA SELECCIONADO LA OPERACION RESTAR\n");

            // pide la cantidad de operandos que se van a utilizar
            const cantidadOperandosResta = await input("Cuantos numeros desea utilizar, a partir de 2 numeros\n\n")

            // verifica que la cantidad de operandos sea a partir de 2
            if (parseInt(cantidadOperandosResta) <= 1) {
                console.log("Cantidad de operandos invalida, saliendo del sistema\n\n");
                break;
            }
            // declaramos el array de numeros vacio
            let arrayNumerosResta = [];


            //le pide al usuario que ingrese un numero y se va almacenando en el array
            for (i = 0; i < parseInt(cantidadOperandosResta); i++) {
                const numeroResta = await input("Ingrese numero\n\n");
                arrayNumerosResta[i] = parseInt(numeroResta);
            }

            //invocamos la funcion que va a restar los digitos y le pasamos como parametro del array de numeros    
            const resultadoResta = restar(arrayNumerosResta);

            // mostramos el resultado
            console.log("El resultado de la resta es: ", resultadoResta);

            break;

        case "3":
            console.log("SE HA SELECCIONADO LA OPERACION MULTIPLICAR\n");

            // pide la cantidad de operandos que se van a utilizar
            const cantidadOperandosMulti = await input("Cuantos numeros desea utilizar, a partir de 2 numeros\n\n")

            // verifica que la cantidad de operandos sea a partir de 2
            if (parseInt(cantidadOperandosMulti) <= 1) {
                console.log("Cantidad de operandos invalida, saliendo del sistema\n\n");
                break;
            }
            // declaramos el array de numeros vacio
            let arrayNumerosMulti = [];


            //le pide al usuario que ingrese un numero y se va almacenando en el array
            for (i = 0; i < parseInt(cantidadOperandosMulti); i++) {
                const numeroMulti = await input("Ingrese numero\n\n");
                arrayNumerosMulti[i] = parseInt(numeroMulti);
            }

            //invocamos la funcion que va a multiplciar los digitos y le pasamos como parametro del array de numeros    
            const resultadoMulti = multiplicar(arrayNumerosMulti);

            // mostramos el resultado
            console.log("El resultado de la multi es: ", resultadoMulti);

            break;

        case "4":
            console.log("SE HA SELECCIONADO LA OPERACION DIVIDIR\n");

            // pide la cantidad de operandos que se van a utilizar
            const cantidadOperandosDivi = await input("Cuantos numeros desea utilizar, a partir de 2 numeros\n\n")

            // verifica que la cantidad de operandos sea a partir de 2
            if (parseInt(cantidadOperandosDivi) <= 1) {
                console.log("Cantidad de operandos invalida, saliendo del sistema\n\n");
                break;
            }
            // declaramos el array de numeros vacio
            let arrayNumerosDivi = [];


            //le pide al usuario que ingrese un numero y se va almacenando en el array
            for (i = 0; i < parseInt(cantidadOperandosDivi); i++) {
                const numeroDivi = await input("Ingrese numero\n\n");
                arrayNumerosDivi[i] = parseInt(numeroDivi);
            }

            //invocamos la funcion que va a multiplciar los digitos y le pasamos como parametro del array de numeros    
            const resultadoDivi = dividir(arrayNumerosDivi);

            // mostramos el resultado
            console.log("El resultado de la division es: ", resultadoDivi);
            break;

        case 5:

            break;

        default:
            console.log("Numero invalido, saliendo del sistema");
            break;
    }


    rl.close();

}



main();