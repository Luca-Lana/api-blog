const { criarHash, verificarSenha} = require('../utils/bcryptUtils')

module.exports = {
	async cadastrarUsuario(req, res) {
		let {nome, email, senha} = req.body
		res.json({nome, email, senha, senhaHash})
	},

	async logarUsuario(req, res) {
		let {email, senha} = req.body
		res.json({email, senha, senhaValida})
	}
}