import estudiantes from "./listado.js";

export function buscarNombre(callback) {

    const rl = readline.createInterface({
        input:process.stdin,
        output: process.stdout
    })
    

        rl.question("Ingrese el nombre del estudiante a buscar: ", (nombre) => {
            
            const encontrado = estudiantes.find(est => 
                est.nombre.toLowerCase() === nombre.toLowerCase()
            );

            if (encontrado) {
                console.log("\n Estudiante encontrado:");
                console.log(`Nombre: ${encontrado.nombre}`);
                console.log(`Edad: ${encontrado.edad}`);
                console.log(`Notas: ${encontrado.notas.join(", ")}`);
                console.log(`Promedio: ${encontrado.promedio}\n`);
            } else {
                console.log("\n No se encontró un estudiante con ese nombre.\n");
            }

            rl.close();
            callback();
        });
    };
