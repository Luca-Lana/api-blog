const jwt = require('jsonwebtoken')
const jwtConfig = ('../config/jwtConfig')

module.exports = {
	criarToken(objeto) {
		return jwt.sign(objeto, jwtConfig.chave, { expiresIn: jwtConfig.expira_em })
	},

	validarToken(token) {
		try {
			return jwt.verify(token, jwtConfig.chave)
		}catch (erro) {
			throw new Error('Token inválido ou expirado')
		}
	}
}
