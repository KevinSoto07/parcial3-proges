import readline from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

// Menú principal
function mostrarMenu(){
    console.log(`
        ---SISTEMA DE GESTIÓN ESCOLAR---
        1. Registrar estudiante
        2. Calcular promedios
        3. Buscar estudiante por nombre
        4. Listado general
        5. Salir
        `);

        rl.question("Seleccione una opción: ", (opcion)=>{
            opcionSeleccionada(opcion);
        })
}

//Controlador del menú
function opcionSeleccionada(opcion){
    switch(opcion){
        case "1":
            //llama a la function de registro.js
            registrarEstudiante(() => mostrarMenu());
            break;

            case "2":
                //Llama a la function de promedio.js
                calcularPromedios(()=> mostrarMenu());

                case "3":
                    //Llama a la función de busqueda.js
                    buscarNombre(() => mostrarMenu());

                    case "4":
                        //Llama la función de listado.js
                        listarEstudiantes(() => mostrarMenu());
                        break;

                        case "5":
                            console.log("\nSaliendo del menú");
                            rl.close();
                            break;

                            default:
                                console.log("Opción no válida");
                                mostrarMenu()
    }
}

mostrarMenu();