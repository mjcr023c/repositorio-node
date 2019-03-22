const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

/*
let output = 'Hello World!';

app.get('/', function(req, res) {
    res.send(output);
})
*/
app.listen(3000)