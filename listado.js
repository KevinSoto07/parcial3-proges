import readline from 'readline';

// Base de datos (array) de estudiantes
let estudiantes = [
    { nombre: "Axel", edad: 24, notas: [10, 9, 8], promedio: 9.0 },
    { nombre: "Granillo", edad: 19, notas: [5, 8, 8], promedio: 7.0 },
    { nombre: "Ezequiel", edad: 19, notas: [8, 6, 6], promedio: 6.67 },
    { nombre: "Fabrizzio", edad: 18, notas: [6, 8, 7], promedio: 7.0 }
];

function listarEstudiantes(callback) {
    console.log("\n=== LISTADO GENERAL DE ESTUDIANTES ===\n");
    
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes registrados aún.\n");
    } else {
        for (let i = 0; i < estudiantes.length; i++) {
            console.log(`${i + 1}. ${estudiantes[i].nombre}`);
            console.log(`   Edad: ${estudiantes[i].edad} años`);
            console.log(`   Notas: ${estudiantes[i].notas.join(" - ")}`);
            
            // Revisa si ya tiene un promedio calculado
            if (estudiantes[i].promedio) {
                console.log(`   Promedio: ${estudiantes[i].promedio.toFixed(2)}`);
            } else {
                // Si no lo tiene, lo calcula para el listado (opcional, pero buena práctica)
                let suma = 0;
                for (let nota of estudiantes[i].notas) {
                    suma += nota;
                }
                let prom = suma / estudiantes[i].notas.length;
                console.log(`   Promedio: ${prom.toFixed(2)}`);
            }
            console.log("");
        }
        console.log(`Total de estudiantes: ${estudiantes.length}\n`);
    }
    
    callback();
}

// Exporta el array de estudiantes (default) y la función de listado (named)
export default estudiantes;
export { listarEstudiantes };