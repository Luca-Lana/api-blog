const { validarToken } = require('../utils/jwtUtils')

module.exports = (req, res, next) => {
		try {
			let token = req.headers.authorization
			if (token) {
				token = token.split(' ')[1]
				let resultado = validarToken(token)
				req.headers.autor = resultado.id
				next()
			} else {
				res.status(400).json({msg: 'Você não tem autorização para essa rota'})
			}
		} catch (erro) {
			res.status(400).json({msg: 'Token invalido ou expirado'})
		}
}
