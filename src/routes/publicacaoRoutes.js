const router = require('express').Router()
const publicacaoController = require('../controllers/publicacaoController')
const validarRequisicao = require('../middleware/autenticacaoMiddleware')

router.get('/publicacoes', publicacaoController.obterPublicacoes)
router.get('/publicacoes/:id', publicacaoController.obterPublicacaoId)

router.use(validarRequisicao)

router.post('/publicacoes', publicacaoController.criarPublicacao)

router.delete('/publicacoes/:id', publicacaoController.removerPublicacao)

module.exports = router