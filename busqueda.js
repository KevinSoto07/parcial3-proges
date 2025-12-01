import readline from 'readline';
import estudiantes from "./listado.js"; // Importa el array central

export function buscarNombre(callback) {

    // Se crea una interfaz local que se cerrará al finalizar
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
            // Muestra el promedio si existe, si no, muestra N/A
            console.log(`Promedio: ${encontrado.promedio ? encontrado.promedio.toFixed(2) : 'N/A'}\n`); 
        } else {
            console.log("\n No se encontró un estudiante con ese nombre.\n");
        }

        rl.close(); // Cierra la interfaz localmente
        callback();
    });

};
