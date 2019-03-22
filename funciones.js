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


module.exports = {
    crear,
    mostrar,
    mostrarest
}