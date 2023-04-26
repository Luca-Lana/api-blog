const bcrypt = require('bcrypt')
const bcryptConfig = require('../config/bcryptConfig')

module.exports = {
	async criarHash(senha) {
		let salt = await bcrypt.genSalt(bcryptConfig.saltRounds)
		return await bcrypt.hash(myPlaintextPassword, salt)
	},

	async verificarSenha(senha, hash) {
		return await bcrypt.compare(senha, hash)
	}
}