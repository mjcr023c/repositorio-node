const { cursos, listarCursos, opcionesInscripcion, inscribirCurso } = require('./datos');


const argv = require('yargs')
    .command('inscribir', 'Inscribirme en un curso', opcionesInscripcion)
    .argv

if (argv.i != undefined) {
    let idCurso = argv.i;
    let nombre = argv.n;
    let cedula = argv.c;
    inscribirCurso(idCurso, nombre, cedula);
} else {
    listarCursos(2000);
}