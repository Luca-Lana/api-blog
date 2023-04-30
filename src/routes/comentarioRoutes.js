const router = require('express').Router()
const comentarioController = require('../controllers/comentarioController')
const validarRequisicao = require('../middleware/autenticacaoMiddleware')

router.use(validarRequisicao)

router.post('/comentarios', comentarioController.criarComentario)

router.delete('/comentarios/:id', comentarioController.removerComentario)

module.exports = router