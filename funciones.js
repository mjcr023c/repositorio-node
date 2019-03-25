const fs = require('fs');

listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
    if (!duplicado) {
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    } else {
        console.log('Ya existe otro estudiante con este nombre');
    }

}

const listar = () => {
    try {
        listaEstudiantes = require('./listado.json');
        //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
    } catch (error) {
        listaEstudiantes = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado con exito');
    })
}

const mostrar = () => {
    listar();
    console.log('Notas de los Estudiantes \n ');
    listaEstudiantes.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('notas ');
            console.log(' matematicas ' + estudiante.matematicas);
            console.log(' ingles ' + estudiante.ingles);
            console.log(' programacion ' + estudiante.programacion + '.\n');
        }

    );
}
const mostrarest = (nombre) => {
    listar();
    let est = listaEstudiantes.find(buscar => buscar.nombre == nombre);

    if (!est) {
        console.log('No existe estudiante');
    } else {
        console.log(est.nombre);
        console.log('notas ');
        console.log(' matematicas ' + est.matematicas);
        console.log(' ingles ' + est.ingles);
        console.log(' programacion ' + est.programacion + '.\n');
    }
}

const mostrarmat = () => {
    listar();
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if (ganan.length == 0) {
        console.log('ningun estudiante va ganando');
    } else {
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('notas ');
            console.log(' matematicas ' + estudiante.matematicas);
        });
    }
}

const mostrarpromedioalto = () => {
    listar();
    let ganan = listaEstudiantes.filter(mat => obtenerPromedio(mat.matematicas, mat.ingles, mat.programacion) >= 3);
    if (ganan.length == 0) {
        console.log('ningun estudiante tiene un promedio alto');
    } else {
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('notas ');
            console.log(' matematicas ' + estudiante.matematicas);
            console.log(' ingles ' + estudiante.ingles);
            console.log(' programacion ' + estudiante.programacion + '.');
            console.log(' promedio : ' + obtenerPromedio(estudiante.matematicas, estudiante.ingles, estudiante.programacion) + '\n');

        });
    }
}

let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => ((nota_uno + nota_dos + nota_tres) / 3);

const actualizar = (nombre, asignatura, calificacion) => {
    listar();
    let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nombre);

    if (!encontrado) {
        console.log('Estudiante no existe');
    } else {
        encontrado[asignatura] = calificacion;
        guardar();
    }
}

const eliminar = (nombre) => {
    listar();
    let estudiantes = listaEstudiantes.filter(est => est.nombre != nombre);
    if (estudiantes.length == listaEstudiantes.length) {
        console.log('no existe estudiante con ese nombre');
    } else {
        listaEstudiantes = estudiantes;
        guardar();
    }
}

module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    mostrarpromedioalto,
    actualizar,
    eliminar
}