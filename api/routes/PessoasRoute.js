const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController')

const router = Router();

router.get('/pessoas/all', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas/create', PessoaController.criarPessoa)
router.put('/pessoas/:id/update', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id/delete', PessoaController.deletarPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.get('/pessoas/matricula/all', PessoaController.pegaTodasAsMatriculas)
router.get('/pessoas/matricula/turma/:turmaId', PessoaController.pegaTodasAsMatriculasPorTurma)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)

module.exports = router