const { cursos, listarCursos, opcionesInscripcion, inscribirCurso } = require('./datos');
const express = require('express')
const app = express()


let output = '';

app.get('/', function(req, res) {
    output = listarCursos(2000);
    res.send(output);
})

app.get('/inscribir/:i/:n/:c', function(req, res) {
    console.log(req.params);
    let idCurso = req.params.i;
    let nombre = req.params.n;
    let cedula = req.params.c;
    output = inscribirCurso(idCurso, nombre, cedula);
    res.send(output);
})

app.listen(3000)