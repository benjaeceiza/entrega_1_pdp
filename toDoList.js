
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
    let tareasArray = [
        {
            titulo: "Colgar la ropa.",
            descripcion: "Cuando la ropa este lavada, colgar la ropa en el patio",
            estado: "Pendiente",
            creacion: new Date(),
            ultimaEdicion: new Date(),
            vencimiento: null,
            dificultad: "⭐"
        },
        {
            titulo: "Hacer la tarea.",
            descripcion: "Hacer la tarea de Lengua",
            estado: "Pendiente",
            creacion: new Date(),
            ultimaEdicion: new Date(),
            vencimiento: null,
            dificultad: "⭐⭐"
        }
    ]



    while (menuPrincipal != 0) {
        menuPrincipal = await input(`
        \n\nHola!\n
        ¿Qué desea hacer?\n
        [1] Ver Mis Tareas.
        [2] Buscar una Tarea.
        [3] Agregar una Tarea.
        [0] Salir.\n`);

        switch (parseInt(menuPrincipal)) {
            case 1:
                let tareasVer = await input(`
        
        Que tareas desea ver?\n
        [1] Todas
        [2] Pendientes
        [3] En curso
        [4] Terminadas
        [0] Volver\n`);

                switch (parseInt(tareasVer)) {
                    case 1:
                        console.log("\nEstas son todas tus tareas.\n");

                        for (i = 0; i < tareasArray.length; i++) {
                            console.log(`[${i+1}] ` + tareasArray[i].titulo);

                        }
                        console.log(`\nDesea ver los detalles de alguna?\nIntroduce el numero para verla o 0 para volver.`);
                        let  detalleTarea = await input(``)
                        while(parseInt(detalleTarea)>tareasArray.length || parseInt(detalleTarea)<1){
                            console.log("Esa tarea no existe, ingrese un numero valido.\n");
                             detalleTarea = await input(``)
                            
                        }
                        console.log(`\n Esta es la tarea que elegiste\n`);
                        
                        for (i = 0; i < tareasArray.length; i++) {
                            
                            if(parseInt(detalleTarea) == i+1){
                                console.log("Nombre Tarea: "+tareasArray[i].titulo);
                                console.log("Descripcion: "+tareasArray[i].descripcion);
                                console.log("Estado: "+tareasArray[i].estado);
                                console.log("Dificultad: "+tareasArray[i].dificultad);
                                console.log("Vencimiento: "+tareasArray[i].vencimiento);
                                console.log("Creacion: "+tareasArray[i].creacion.toLocaleDateString());
                                
                            }

                        }
                        console.log(`\nDeseas Editar?\n`);
                        let  editar = await input(``)
                        break;
                    case 2:
                    case 3:
                    case 4:
                    default:

                }
                break;
            case 2:
                break;
            case 3:
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

