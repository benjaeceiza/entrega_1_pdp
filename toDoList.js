
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

    while(menuPrincipal != 0){
        menuPrincipal = await input(`
        \n\nHola!\n\n
        ¿Qué desea hacer?\n
        [1] Ver Mis Tareas
        [2] Buscar una Tarea
        [3] Agregar una Tarea
        [0] Salir\n`);
    }
    
   
 
  rl.close();
}

main()

