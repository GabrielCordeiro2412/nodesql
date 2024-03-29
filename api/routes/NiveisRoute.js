const { Router } = require('express')
const NivelController = require('../controllers/NivelController')
 
const router = Router()
router
 .get('/niveis/all', NivelController.pegaTodosOsNiveis)
 .get('/niveis/:id', NivelController.pegaUmNivel)
 .post('/niveis/create', NivelController.criaNivel)
 .put('/niveis/:id/update', NivelController.atualizaNivel)
 .delete('/niveis/:id', NivelController.apagaNivel)
module.exports = router