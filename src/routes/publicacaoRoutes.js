const router = require('express').Router()
const publicacaoController = require('../controllers/publicacaoController')
const validarRequisicao = require('../middleware/autenticacaoMiddleware')

router.get('/publicacoes', publicacaoController.obterPublicacoes)

router.use(validarRequisicao)

router.post('/publicacoes', publicacaoController.criarPublicacao)

module.exports = router