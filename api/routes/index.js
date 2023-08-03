const bodyParser = require('body-parser')
const pessoas = require('./PessoasRoute')
const niveis = require('./NiveisRoute')
const turmas = require('./TurmasRoute')


module.exports = app => {
    app.use(bodyParser.json(),
    bodyParser.urlencoded({extended: false}),
    pessoas,
    niveis,
    turmas
    );
}