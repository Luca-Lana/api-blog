const router = require('express').Router()
const autenticacaoController = require('../controllers/autenticacaoController')

router.post('/cadastro', autenticacaoController.cadastrarUsuario)

router.post('/login', autenticacaoController.logarUsuario)

module.exports = router