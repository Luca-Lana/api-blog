const jwt = require('jsonwebtoken')
const jwtConfig = ('../config/jwtConfig')

module.exports = {
	async criarToken(objeto) {
		return jwt.sign(objeto, jwtConfig.chave, { expiresIn: jwtConfig.expira_em })
	},

	async validarToken(token) {
		try {
			return jwt.verify(token, jwtConfig.chave)
		}catch (erro) {
			throw new Error('Token inválido ou expirado')
		}
	}
}
