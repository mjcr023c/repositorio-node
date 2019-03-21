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

let texto = '';

let obtenerCurso = (idCurso) => (cursos.find(curso => curso.id == idCurso));

let listarCursos = (timmer) => {
    let offset = 0;
    cursos.forEach(function(curso) {
        // setTimeout(function() {
        texto = texto + ('El id del curso es ' + curso.id + ', el nombre del curso es ' + curso.nombre +
            ',<br>' + 'tiene una duración de ' + curso.duracion + ' horas y ' +
            '<br>' + 'un valor de ' + curso.valor + ' USD.<br><br>');
        //  }, offset);
        offset += timmer;
    });
    return texto;
}

let inscribirCurso = (idCurso, nombre, cedula) => {
    let curso = obtenerCurso(idCurso);
    if (curso == undefined) {
        texto = 'Ha ingresado un ID de curso que no existe.<br>';
        listarCursos(0);
    } else {
        texto = texto + 'El Estudiante ' + nombre + '.<br>' +
            'Con cedula ' + cedula + '.<br>' +
            'Se ha matriculado en el curso con id igual a ' + curso.id + ', el nombre del curso es ' + curso.nombre +
            ',<br>' + 'tiene una duración de ' + curso.duracion + ' horas y ' +
            '<br>' + 'un valor de ' + curso.valor + ' USD.<br><br>'
    }
    return texto;
}


module.exports = {
    cursos,
    listarCursos,
    opcionesInscripcion,
    inscribirCurso
};