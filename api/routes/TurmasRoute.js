const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()
router
 .get('/turmas/all', TurmaController.pegaTodasAsTurmas)
 .get('/turmas/:id', TurmaController.pegaUmaTurma)
 .post('/turmas/create', TurmaController.criaTurma)
 .put('/turmas/:id/update', TurmaController.atualizaTurma)
 .delete('/turmas/:id', TurmaController.apagaTurma)
module.exports = router