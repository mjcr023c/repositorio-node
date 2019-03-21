const fs = require('fs');

let cursos = [{
        id: 1,
        nombre: 'Diseño de Bases de Datos',
        duracion: 16,
        valor: 15
    },
    {
        id: 2,
        nombre: 'Node Js',
        duracion: 46,
        valor: 45
    },
    {
        id: 3,
        nombre: 'Angular Js',
        duracion: 36,
        valor: 35
    }
];

let opcionesInscripcion = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}

let obtenerCurso = (idCurso) => (cursos.find(curso => curso.id == idCurso));

let listarCursos = (timmer) => {
    let offset = 0;
    cursos.forEach(function(curso) {
        setTimeout(function() {
            console.log('El id del curso es ' + curso.id + ', el nombre del curso es ' + curso.nombre +
                ',\n' + 'tiene una duración de ' + curso.duracion + ' horas y ' +
                '\n' + 'un valor de ' + curso.valor + ' USD.\n\n');
        }, offset);
        offset += timmer;
    });
}

let inscribirCurso = (idCurso, nombre, cedula) => {
    let curso = obtenerCurso(idCurso);
    if (curso == undefined) {
        console.log('Ha ingresado un ID de curso que no existe.\n');
        listarCursos(0);
    } else {
        let texto = 'El Estudiante ' + nombre + '.\n' +
            'Con cedula ' + cedula + '.\n' +
            'Se ha matriculado en el curso con id igual a ' + curso.id + ', el nombre del curso es ' + curso.nombre +
            ',\n' + 'tiene una duración de ' + curso.duracion + ' horas y ' +
            '\n' + 'un valor de ' + curso.valor + ' USD.\n\n'
        fs.appendFile('matricula.txt', texto, (err) => {
            if (err) throw (err);
            console.log('Inscrito correctamente');
        });
    }
}


module.exports = {
    cursos,
    listarCursos,
    opcionesInscripcion,
    inscribirCurso
};