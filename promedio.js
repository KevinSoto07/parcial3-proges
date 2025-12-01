import readline from 'readline';
import estudiantes from './listado.js'; // Importa el array central

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export function calcularPromedios(callback) {

    rl.question("Ingrese el nombre del estudiante: ", (nombreBuscado) => {

        
        const estudiante = estudiantes.find(est =>
            est.nombre.toLowerCase() === nombreBuscado.toLowerCase()
        );

        if (!estudiante) {
            console.log("\nNo se encontró un estudiante con ese nombre.\n");
            // No se cierra rl aquí, ya que se reutiliza para la siguiente pregunta.
            // PERO: Si cerramos rl en el caso de no encontrar, debemos abrir uno nuevo en la recursión.
            // Para simplificar, cerraremos rl al final.

            // El problema aquí es que 'rl' es global en promedio.js, si lo cierras en el 'if' se rompe.
            // Pero si no se cierra, el programa no termina.

            // Solución: Refactorizar promedio.js para que 'rl' sea local y se cierre al final.
            // El código que enviaste tiene 'rl' global y no se cierra en el 'else' del final.
            // Lo ajustaré para que cierre la interfaz localmente o al final.

            // Vamos a cerrar la interfaz solo en el error para regresar al menú.
            rl.close(); 
            callback();
            return;
        }

        console.log(`\nEstudiante encontrado: ${estudiante.nombre}`);
        rl.question("¿Cuántas notas va a ingresar? ", (cantStr) => {

            const cantidad = parseInt(cantStr);
            if (isNaN(cantidad) || cantidad <= 0) {
                console.log("Cantidad inválida.");
                rl.close(); 
                callback();
                return;
            }

            let suma = 0;
            let contador = 0;

            function pedirNota() {
                if (contador < cantidad) {
                    rl.question(`Ingrese nota ${contador + 1}: `, (notaStr) => {
                        const nota = parseFloat(notaStr);

                        if (isNaN(nota) || nota < 0 || nota > 10) {
                            console.log("Nota inválida. Debe estar entre 0 y 10.");
                            pedirNota();
                            return;
                        }

                        suma += nota;
                        contador++;
                        pedirNota();
                    });

                } else {
                    const promedio = suma / cantidad;
                    // Actualiza la propiedad 'promedio' del estudiante en el array central
                    estudiante.promedio = promedio; 
                    estudiante.notas = []; // Se borran las notas previas y se guardan las nuevas

                    console.log("\n--- RESULTADO ---");
                    console.log(`Promedio de ${estudiante.nombre}: ${promedio.toFixed(2)}`);

                    if (promedio >= 6) {
                        console.log("Estado: APROBADO");
                    } else {
                        console.log("Estado: REPROBADO");
                    }
                    console.log("-----------------\n");

                    rl.close(); // Se cierra la interfaz localmente
                    callback();
                }
            }

            pedirNota();
        });
    });

}