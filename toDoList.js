
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




async function main() {

    let menuPrincipal;

    // ARRAY DE TAREAS

    let tareasArray = [
        {
            titulo: "Colgar la ropa",
            descripcion: "Cuando la ropa este lavada, colgar la ropa en el patio",
            estado: "Pendiente",
            creacion: new Date("09-05-2025"),
            ultimaEdicion: new Date("09-05-2025"),
            vencimiento: new Date(),
            dificultad: "⭐"
        },
        {
            titulo: "Hacer la tarea",
            descripcion: "Hacer la tarea de Lengua",
            estado: "Pendiente",
            creacion: new Date("09-10-2025"),
            ultimaEdicion: new Date("09-11-2025"),
            vencimiento: new Date(),
            dificultad: "⭐⭐"
        },
        {
            titulo: "Cocinar budin",
            descripcion: "hacer un budin para llevar a la universidad",
            estado: "Terminada",
            creacion: new Date("09-10-2025"),
            ultimaEdicion: new Date("09-11-2025"),
            vencimiento: new Date(),
            dificultad: "⭐⭐"
        }
    ]

    // MENU DE PRINCIPAL DE OPCIONES

    while (menuPrincipal != 0) {
        menuPrincipal = await input(`
            \n\nHola!\n
            ¿Qué desea hacer?\n
            [1] Ver Mis Tareas.
            [2] Buscar una Tarea.
            [3] Agregar una Tarea.
            [0] Salir.\n`);

        switch (parseInt(menuPrincipal)) {

            // VER TAREAS

            case 1:
                let arrayTareasFiltrado = [];
                let tareasVer = await input(`
                        
                        Que tareas desea ver?\n
                        [1] Todas
                        [2] Pendientes
                        [3] En curso
                        [4] Terminadas
                        [0] Volver\n`);

                //CONTROLA EL VALOR INGRESADO

                while (parseInt(tareasVer) != 1 && parseInt(tareasVer) != 2 && parseInt(tareasVer) != 3 && parseInt(tareasVer) != 4 && parseInt(tareasVer) != 0) {
                    console.log("\nHa ingresado un numero invalido, intentelo nuevamente\n");
                    tareasVer = await input(``);

                }

                // FILTRAMOS EL ARRAY ORIGINAL CON LA OPCION DEL USUARIO

                // SI ELIGIO TODAS LA TAREAS
                if (parseInt(tareasVer) == 1) {

                    arrayTareasFiltrado = tareasArray;


                    // SI ELIGIO LAS PENDIENTES 
                } else if (parseInt(tareasVer) == 2) {
                    let contador = 0;

                    for (i = 0; i < tareasArray.length; i++) {
                        if (tareasArray[i].estado == "Pendiente") {

                            arrayTareasFiltrado[contador] = tareasArray[i];
                            contador++

                        }


                    }
                    // SI ELIGIO LAS QUE ESTAN EN CURSO
                } else if (parseInt(tareasVer) == 3) {
                    let contador = 0;
                    for (i = 0; i < tareasArray.length; i++) {
                        if (tareasArray[i].estado == "En Curso") {

                            arrayTareasFiltrado[contador] = tareasArray[i];
                            contador++

                        }



                    }
                    // SI ELIGIO LAS QUE ESTAN TERMINADAS
                } else if (parseInt(tareasVer) == 4) {
                    let contador = 0;
                    for (i = 0; i < tareasArray.length; i++) {
                        if (tareasArray[i].estado == "Terminada") {

                            arrayTareasFiltrado[contador] = tareasArray[i];
                            contador++

                        }



                    }
                    //  SI ELIGE VOLVER
                } else if (parseInt(tareasVer) == 0) {
                    break;
                } else {

                }

                console.log("\nEstas son todas tus tareas.\n");

                // CONTROLA SI HAY TAREAS
                if (arrayTareasFiltrado.length == 0) {
                    console.log("No hay tareas");
                    const pulsar = await input(`Presione una tecla para continuar...`);
                    break;


                } else {

                    // LISTADO DE TAREAS

                    for (i = 0; i < arrayTareasFiltrado.length; i++) {

                        console.log(`[${i + 1}] ` + arrayTareasFiltrado[i].titulo);

                    }
                }


                console.log(`\nDesea ver los detalles de alguna?\nIntroduce el numero para verla o 0 para volver.`);
                let detalleTarea = await input(``)
                if (parseInt(detalleTarea) == 0) {
                    break;
                }

                // CONTROLA QUE HAYA SELECCIONADO UNA TAREA QUE EXISTA
                while (parseInt(detalleTarea) > arrayTareasFiltrado.length || parseInt(detalleTarea) < 0) {
                    console.log("Esa tarea no existe, ingrese un numero valido.\n");
                    detalleTarea = await input(``)

                }
                console.log(`\nEsta es la tarea que elegiste.\n`);

                // DETALLADO DE LA TAREA

                for (i = 0; i < arrayTareasFiltrado.length; i++) {

                    if (parseInt(detalleTarea) == i + 1) {
                        console.log("Nombre Tarea: " + arrayTareasFiltrado[i].titulo);
                        console.log("Descripcion: " + arrayTareasFiltrado[i].descripcion);
                        console.log("Estado: " + arrayTareasFiltrado[i].estado);
                        console.log("Dificultad: " + arrayTareasFiltrado[i].dificultad);
                        console.log("Vencimiento: " + arrayTareasFiltrado[i].vencimiento.toLocaleDateString());
                        console.log("Creacion: " + arrayTareasFiltrado[i].creacion.toLocaleDateString());
                        console.log("ultimaEdicion: " + arrayTareasFiltrado[i].ultimaEdicion.toLocaleDateString());

                    }

                }
                console.log(`\nSi deseas editarla, presiona E, o Presiona 0 para volver.\n`);
                let editar = await input(``)

                // CONTROLA QUE PUESTO UN DATO VALIDO
                while (editar != "e" && editar != "E" && parseInt(editar) != 0) {
                    console.log("\nHa ingresado un numero invalo, intentelo nuevamente\n");
                    editar = await input(``);

                }

                // SI ELIGIO EDITAR ENTRA ACA

                if (editar == "E" || editar == "e") {
                    for (i = 0; i < arrayTareasFiltrado.length; i++) {
                        if (parseInt(detalleTarea) == i + 1) {
                            //  MENU DE EDICION
                            console.log(`\nEstas editando la tarea: ${arrayTareasFiltrado[i].titulo}\n`);
                            console.log(`- Si deseas mantener los valores de un atributo, simplemente dejalos en blanco.\n`);
                            console.log(`- Si deseas dejar en blanco un atributo, escribe un espacio.\n`);
                            console.log(`1. Ingresa el Titulo: \n`);
                            let nuevoTitulo = await input(``);
                            console.log(`2. Ingresa la descripcion: \n`);
                            let nuevaDescripcion = await input(``);
                            console.log(`3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada):\n`);
                            let nuevoEstado = await input(``);
                            if (nuevoEstado != " " && nuevoEstado != "" &&
                                nuevoEstado != "e" && nuevoEstado != "E" &&
                                nuevoEstado != "p" && nuevoEstado != "P" &&
                                nuevoEstado != "t" && nuevoEstado != "T"
                                && nuevoEstado != "c" && nuevoEstado != "C") {

                                console.log("Opcion invalida, no se modificara el valor de ESTADO");
                                nuevoEstado = "";

                            }
                            console.log(`4. Dificultad ([1] / [2] / [3]):\n`);
                            let nuevaDificultad = await input(``);
                            while (parseInt(nuevaDificultad) != 1 && parseInt(nuevaDificultad) != 2 && parseInt(nuevaDificultad) != 3 && nuevaDificultad != " " && nuevaDificultad != "") {
                                console.log("\nHa introducido un numero invalido, no se modificara la dificultad.\n");
                                nuevaDificultad = "";
                                const pulsar = await input(`Presione una tecla para continuar...`);
                            }


                            console.log(`5. Vencimiento: Ingresa la cantidad de dias que quieres aumentar la fecha de vencimiento\n`);
                            let nuevoVencimiento = await input(``);

                            // ESTRUCTURAS DE CONTROL, VERIFICA SI EL USUARIO INGRESO UN ESPACIO, UN DATO, O SI SOLO DIO ENTER 

                            // VALIDACION DE TITULO
                            if (nuevoTitulo == " ") {
                                tareasArray[i].titulo = "Sin Titulo";
                            } else if (nuevoTitulo) {

                                tareasArray[i].titulo = nuevoTitulo;
                                tareasArray[i].ultimaEdicion = new Date();
                            }

                            // VALIDACION DE ESTADO
                            if (nuevoEstado == " ") {
                                tareasArray[i].estado = "Pendiente";
                            } else if (nuevoEstado) {

                                if (nuevoEstado == "p" || nuevoEstado == "P") {
                                    tareasArray[i].estado = "Pendiente";
                                    tareasArray[i].ultimaEdicion = new Date();

                                } else if (nuevoEstado == "e" || nuevoEstado == "E") {
                                    tareasArray[i].estado = "En Curso";
                                    tareasArray[i].ultimaEdicion = new Date();

                                } else if (nuevoEstado == "t" || nuevoEstado == "T") {
                                    tareasArray[i].estado = "Terminada";
                                    tareasArray[i].ultimaEdicion = new Date();

                                } else if (nuevoEstado == "c" || nuevoEstado == "C") {

                                    tareasArray[i].estado = "Cancelada";
                                    tareasArray[i].ultimaEdicion = new Date();
                                }

                            }

                            // VALIDACION DE DESCRIPCION
                            if (nuevaDescripcion == " ") {
                                tareasArray[i].descripcion = "Sin Descripción";
                            } else if (nuevaDescripcion) {

                                tareasArray[i].descripcion = nuevaDescripcion;
                                tareasArray[i].ultimaEdicion = new Date();
                            }

                            // VALIDACION DE DIFICULTAD

                            if (nuevaDificultad == " ") {
                                tareasArray[i].dificultad = "⭐";
                            } else if (nuevaDificultad) {
                                if (parseInt(nuevaDificultad) == 1) {
                                    tareasArray[i].dificultad = "⭐";
                                    tareasArray[i].ultimaEdicion = new Date();

                                } else if (parseInt(nuevaDificultad) == 2) {

                                    tareasArray[i].dificultad = "⭐⭐";
                                    tareasArray[i].ultimaEdicion = new Date();
                                } else if (parseInt(nuevaDificultad) == 3) {

                                    tareasArray[i].dificultad = "⭐⭐⭐";
                                    tareasArray[i].ultimaEdicion = new Date();
                                }
                            }
                            // VALIDACION DE VENCIMIENTO
                            if (nuevoVencimiento == " ") {
                                console.log("No puede dejar en blanco la fecha de vencimiento, Se dejara la fecha existente.\n");
                            } else if (nuevoVencimiento) {

                                let dia = tareasArray[i].vencimiento.getDate();

                                tareasArray[i].vencimiento.setDate(dia + parseInt(nuevoVencimiento));
                                tareasArray[i].ultimaEdicion = new Date();
                            }

                            console.log("!Los Datos se han guardado exitosamente!\n");

                            const pulsar = await input(`Presione una tecla para continuar...`);


                        }



                    }
                }

                break;
            case 2:

                console.log("\nIntroduce el titulo de la tarea para buscarla:\n");
                const buscarTarea = await input(``);
                let tareasEncontradas = [];
                let contador = 0;


                for (i = 0; i < tareasArray.length; i++) {
                    if (buscarTarea == tareasArray[i].titulo) {
                        tareasEncontradas[contador] = tareasArray[i];
                        contador++

                    }

                }

                if (tareasEncontradas.length == 0) {
                    console.log("\nNo se han encontrado tareas relacionadas a la busqueda\n");
                    const pulsar = await input("Presione enter para continuar...")
                    break;
                } else {
                    for (i = 0; i < tareasEncontradas.length; i++) {
                        console.log(`\n[${i + 1}] ${tareasEncontradas[i].titulo}\n`);
                    }

                    console.log(`\nDesea ver los detalles de alguna?\nIntroduce el numero para verla o 0 para volver.`);
                    let detalleTarea = await input(``)
                    if (parseInt(detalleTarea) == 0) {
                        break;
                    }

                    // CONTROLA QUE HAYA SELECCIONADO UNA TAREA QUE EXISTA
                    while (parseInt(detalleTarea) > tareasEncontradas.length || parseInt(detalleTarea) < 0) {
                        console.log("Esa tarea no existe, ingrese un numero valido.\n");
                        detalleTarea = await input(``)

                    }

                    console.log(`\nEsta es la tarea que elegiste.\n`);

                    // DETALLADO DE LA TAREA

                    for (i = 0; i < tareasEncontradas.length; i++) {

                        if (parseInt(detalleTarea) == i + 1) {
                            console.log("Nombre Tarea: " + tareasEncontradas[i].titulo);
                            console.log("Descripcion: " + tareasEncontradas[i].descripcion);
                            console.log("Estado: " + tareasEncontradas[i].estado);
                            console.log("Dificultad: " + tareasEncontradas[i].dificultad);
                            console.log("Vencimiento: " + tareasEncontradas[i].vencimiento.toLocaleDateString());
                            console.log("Creacion: " + tareasEncontradas[i].creacion.toLocaleDateString());
                            console.log("ultimaEdicion: " + tareasEncontradas[i].ultimaEdicion.toLocaleDateString());

                        }

                    }
                    console.log(`\nSi deseas editarla, presiona E, o Presiona 0 para volver.\n`);
                    let editar = await input(``)
                    // CONTROLA QUE PUESTO UN DATO VALIDO
                    while (editar != "e" && editar != "E" && parseInt(editar) != 0) {
                        console.log("\nHa ingresado un numero invalo, intentelo nuevamente\n");
                        editar = await input(``);

                    }

                    // SI ELIGIO EDITAR ENTRA ACA

                    if (editar == "E" || editar == "e") {
                        for (i = 0; i < tareasEncontradas.length; i++) {
                            if (parseInt(detalleTarea) == i + 1) {
                                //  MENU DE EDICION
                                console.log(`\nEstas editando la tarea: ${tareasEncontradas[i].titulo}\n`);
                                console.log(`- Si deseas mantener los valores de un atributo, simplemente dejalos en blanco.\n`);
                                console.log(`- Si deseas dejar en blanco un atributo, escribe un espacio.\n`);
                                console.log(`1. Ingresa el Titulo: \n`);
                                let nuevoTitulo = await input(``);
                                console.log(`2. Ingresa la descripcion: \n`);
                                let nuevaDescripcion = await input(``);
                                console.log(`3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada):\n`);
                                let nuevoEstado = await input(``);
                                if (nuevoEstado != " " && nuevoEstado != "" &&
                                    nuevoEstado != "e" && nuevoEstado != "E" &&
                                    nuevoEstado != "p" && nuevoEstado != "P" &&
                                    nuevoEstado != "t" && nuevoEstado != "T"
                                    && nuevoEstado != "c" && nuevoEstado != "C") {

                                    console.log("Opcion invalida, no se modificara el valor de ESTADO");
                                    nuevoEstado = "";

                                }
                                console.log(`4. Dificultad ([1] / [2] / [3]):\n`);
                                let nuevaDificultad = await input(``);
                                while (parseInt(nuevaDificultad) != 1 && parseInt(nuevaDificultad) != 2 && parseInt(nuevaDificultad) != 3 && nuevaDificultad != " " && nuevaDificultad != "") {
                                    console.log("\nHa introducido un numero invalido, no se modificara la dificultad.\n");
                                    nuevaDificultad = "";
                                    const pulsar = await input(`Presione una tecla para continuar...`);
                                }


                                console.log(`5. Vencimiento: Ingresa la cantidad de dias que quieres aumentar la fecha de vencimiento\n`);
                                let nuevoVencimiento = await input(``);

                                // ESTRUCTURAS DE CONTROL, VERIFICA SI EL USUARIO INGRESO UN ESPACIO, UN DATO, O SI SOLO DIO ENTER 

                                // VALIDACION DE TITULO
                                if (nuevoTitulo == " ") {
                                    tareasArray[i].titulo = "Sin Titulo";
                                } else if (nuevoTitulo) {

                                    tareasArray[i].titulo = nuevoTitulo;
                                    tareasArray[i].ultimaEdicion = new Date();
                                }

                                // VALIDACION DE ESTADO
                                if (nuevoEstado == " ") {
                                    tareasArray[i].estado = "Pendiente";
                                } else if (nuevoEstado) {

                                    if (nuevoEstado == "p" || nuevoEstado == "P") {
                                        tareasArray[i].estado = "Pendiente";
                                        tareasArray[i].ultimaEdicion = new Date();

                                    } else if (nuevoEstado == "e" || nuevoEstado == "E") {
                                        tareasArray[i].estado = "En Curso";
                                        tareasArray[i].ultimaEdicion = new Date();

                                    } else if (nuevoEstado == "t" || nuevoEstado == "T") {
                                        tareasArray[i].estado = "Terminada";
                                        tareasArray[i].ultimaEdicion = new Date();

                                    } else if (nuevoEstado == "c" || nuevoEstado == "C") {

                                        tareasArray[i].estado = "Cancelada";
                                        tareasArray[i].ultimaEdicion = new Date();
                                    }

                                }

                                // VALIDACION DE DESCRIPCION
                                if (nuevaDescripcion == " ") {
                                    tareasArray[i].descripcion = "Sin Descripción";
                                } else if (nuevaDescripcion) {

                                    tareasArray[i].descripcion = nuevaDescripcion;
                                    tareasArray[i].ultimaEdicion = new Date();
                                }

                                // VALIDACION DE DIFICULTAD

                                if (nuevaDificultad == " ") {
                                    tareasArray[i].dificultad = "⭐";
                                } else if (nuevaDificultad) {
                                    if (parseInt(nuevaDificultad) == 1) {
                                        tareasArray[i].dificultad = "⭐";
                                        tareasArray[i].ultimaEdicion = new Date();

                                    } else if (parseInt(nuevaDificultad) == 2) {

                                        tareasArray[i].dificultad = "⭐⭐";
                                        tareasArray[i].ultimaEdicion = new Date();
                                    } else if (parseInt(nuevaDificultad) == 3) {

                                        tareasArray[i].dificultad = "⭐⭐⭐";
                                        tareasArray[i].ultimaEdicion = new Date();
                                    }
                                }
                                // VALIDACION DE VENCIMIENTO
                                if (nuevoVencimiento == " ") {
                                    console.log("No puede dejar en blanco la fecha de vencimiento, Se dejara la fecha existente.\n");
                                } else if (nuevoVencimiento) {

                                    let dia = tareasArray[i].vencimiento.getDate();

                                    tareasArray[i].vencimiento.setDate(dia + parseInt(nuevoVencimiento));
                                    tareasArray[i].ultimaEdicion = new Date();
                                }

                                console.log("!Los Datos se han guardado exitosamente!\n");

                                const pulsar = await input(`Presione una tecla para continuar...`);


                            }



                        }
                    }



                }




                break;

            // PETICION DE TITULO TAREA
            case 3:
                console.log("Introduce El titulo de la tarea:\n");
                let titulo = await input(``);

                if (titulo == "") {
                    titulo = "Sin titulo";
                };


                //   PETICION DESCRIPCION DE LA TAREA

                console.log("Introduce la descripcion de la tarea:\n");
                let descripcion = await input(``);

                if (descripcion == "") {
                    descripcion = "Sin descripcion";
                };


                // PETICION DEL ESTADIO DE LA TAREA

                console.log("Introduce el estado de la tarea:\n");
                console.log("Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada):\n");
                let estado = await input(``);

                if (estado == "") {
                    estado = "Pendiente";
                };
                if (estado == "p" || estado == "P") {
                    estado = "Pendiente";
                };
                if (estado == "E" || estado == "e") {
                    estado = "En Curso";
                };
                if (estado == "t" || estado == "T") {
                    estado = "Terminada";
                };
                if (estado == "c" || estado == "C") {
                    estado = "Cancelada";
                };
            
                // PETICION DE LA DIFICULTAD DE LA TAREA

                console.log("Introduce la dificultad de la tarea:\n");
                console.log("Dificultad ([1] / [2] / [3])::\n");
                let dificultad = await input(``);

                if (dificultad == "") {
                    dificultad = "⭐";
                }
                if (parseInt(dificultad) == 1) {
                    dificultad = "⭐";
                }
                if (parseInt(dificultad) == 2) {
                    dificultad = "⭐⭐";
                }
                if (parseInt(dificultad) == 3) {
                    dificultad = "⭐⭐⭐";
                }

                // ASIGNAMIENTO DE VENCIMIENTO, SE LE SUMA 10 DIAS A LA FECHA DE LA CREACION

                const fecha = new Date();
                const dia = fecha.getDate();
                fecha.setDate(dia + 10);

                console.log(`\nTitulo: ${titulo}`);
                console.log(`Descripcion: ${descripcion}`);
                console.log(`Estado: ${estado}`);
                console.log(`Dificultad: ${dificultad}`);
                console.log(`Vencimiento: ${fecha.toLocaleDateString()}`);
                let pulsar = await input(`\nPresione una tecla para continuar...`);

                // LO MANDAMOS AL ARRAY PRINCIPAL

                tareasArray[tareasArray.length] = { titulo, descripcion, estado, dificultad, vencimiento: fecha, creacion: new Date(), ultimaEdicion: new Date() };
                console.log("\nTarea Agregada con exito!:");

                pulsar = await input(`\nPresione una tecla para continuar...`);

                break;
            case 0:
                break;
            default:

                break;

        }
    }



    rl.close();
}

main()

