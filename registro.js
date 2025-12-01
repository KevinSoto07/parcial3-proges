import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let estudiantes = []; 

function registrarEstudiante(nombre, edad, notas) {
    const estudiante = {
        nombre: nombre,
        edad: edad,
        notas: notas
    };

    estudiantes.push(estudiante);
    console.log("Estudiante registrado:", estudiante);
}

function mostrarEstudiantes() {
    console.log("Lista de estudiantes:");
    console.log(estudiantes);
}

registrarEstudiante("Axel", 24, [10, 9, 8]);
registrarEstudiante("Granillo", 19, [5, 8, 8]);
registrarEstudiante("Ezequiel", 19, [8, 6, 6]);
registrarEstudiante("Fabrizzio", 18, [6, 8, 7]);

mostrarEstudiantes();
rl.close();
