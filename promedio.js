import readline from 'readline';
import estudiantes from './listado.js';

    const rl = readline.createInterface({
        input:process.stdin,
        output: process.stdout,
        terminal: false
    })


export function calcularPromedios(callback) {

  rl.question("Ingrese el nombre del estudiante: ", (nombreBuscado) => {

    
    const estudiante = estudiantes.find(est =>
      est.nombre.toLowerCase() === nombreBuscado.toLowerCase()
    );

    if (!estudiante) {
      console.log("\nNo se encontró un estudiante con ese nombre.\n");
      callback();
      return;
    }

    console.log(`\nEstudiante encontrado: ${estudiante.nombre}`);
    rl.question("¿Cuántas notas va a ingresar? ", (cantStr) => {

      const cantidad = parseInt(cantStr);
      if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida.");
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
          estudiante.promedio = promedio;

          console.log("\n--- RESULTADO ---");
          console.log(`Promedio de ${estudiante.nombre}: ${promedio.toFixed(2)}`);

          if (promedio >= 6) {
            console.log("Estado: APROBADO");
          } else {
            console.log("Estado: REPROBADO");
          }
          console.log("-----------------\n");

          callback();
        }
      }

      pedirNota();
    });
  });

}
