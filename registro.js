import readline from 'readline';
import estudiantes from './listado.js'; // Importa el array central

    const rl = readline.createInterface({
        input:process.stdin,
        output: process.stdout,
        terminal: false
    })

export function registrarEstudiante(callback) {

    rl.question("Ingrese el nombre del estudiante: ", (nombre) => {
        rl.question("Ingrese la edad: ", (edadStr) => {
            const edad = parseInt(edadStr);

            rl.question("¿Cuántas notas va a ingresar? ", (cantStr) => {
                const cantidad = parseInt(cantStr);
                if (isNaN(cantidad) || cantidad <= 0) {
                    console.log("Cantidad inválida.");
                    rl.close();
                    callback();
                    return;
                }

                const notas = [];
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
                            notas.push(nota);
                            contador++;
                            pedirNota();
                        });
                    } else {
                        // Agrega el nuevo estudiante al array central
                        estudiantes.push({ nombre, edad, notas }); 
                        console.log("Estudiante registrado:", { nombre, edad, notas });
                        callback();
                    }
                }

                pedirNota();
            });
        });
    });
}