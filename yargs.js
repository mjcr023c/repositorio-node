const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    default: 0,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const mostrarest = {
    nombre
}

const argv = require('yargs')
    .command('crear', 'Crear un estudiante en mi BD', creacion)
    .command('mostrar', 'Mostrar estudiantes y sus notas')
    .command('mostrarest', 'Mostrar estudiante y sus notas', mostrarest)
    .argv


module.exports = {
    argv
}