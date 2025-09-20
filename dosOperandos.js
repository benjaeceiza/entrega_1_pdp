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

function sumar(numeroUno, numeroDos) {

    const resultado = parseInt(numeroUno) + parseInt(numeroDos);
    return resultado;
};

function restar(numeroUno, numeroDos) {

    const resultado = parseInt(numeroUno) - parseInt(numeroDos);
    return resultado;
};

function multiplicar(numeroUno, numeroDos) {
    const resultado = parseInt(numeroUno) * parseInt(numeroDos);
    return resultado;
};

function dividir(numeroUno, numeroDos) {

    const resultado = parseInt(numeroUno) / parseInt(numeroDos);
    return resultado;

};




async function main() {


    const operacion = await input("Que operacion matematica desea realizar?\n\n Ingrese 1 para SUMAR\n Ingrese 2 para RESTAR\n Ingrese 3 para MULTIPLICAR\n Ingrese 4 para DIVIDIR\n");

    switch (operacion) {

        case "1":
            console.log("SE HA SELECCIONADO LA OPERACION SUMAR\n");
            const numeroUnoSuma = await input("Ingrese 1er numero\n");
            const numeroDosSuma = await input("Ingrese 2do numero\n");
            const resultadoSuma = sumar(numeroUnoSuma, numeroDosSuma)

            console.log("El resultado de la suma es: ", resultadoSuma);

            break;

        case "2":
            console.log("SE HA SELECCIONADO LA OPERACION RESTAR\n");
            const numeroUnoResta = await input("Ingrese 1er numero\n");
            const numeroDosResta = await input("Ingrese 2do numero\n");
            const resultadoResta = restar(numeroUnoResta, numeroDosResta)

            console.log("El resultado de la resta es: ", resultadoResta);
            break;

        case "3":
            console.log("SE HA SELECCIONADO LA OPERACION MULTIPLICAR\n");
            const numeroUnoMulti = await input("Ingrese 1er numero\n");
            const numeroDosMulti = await input("Ingrese 2do numero\n");
            const resultadoMulti = multiplicar(numeroUnoMulti, numeroDosMulti)

            console.log("El resultado de la multiplicacion es: ", resultadoMulti);
            break;

        case "4":
            console.log("SE HA SELECCIONADO LA OPERACION DIVIDIR\n");
            const numeroUnoDivision = await input("Ingrese 1er numero\n");
            const numeroDosDivision = await input("Ingrese 2do numero\n");
            const resultadoDivision = dividir(numeroUnoDivision, numeroDosDivision)

            console.log("El resultado de la división es: ", resultadoDivision);
            break;

        default:
            console.log("Numero invalido, saliendo del sistema");
            break;
    }


    rl.close();

}



main();