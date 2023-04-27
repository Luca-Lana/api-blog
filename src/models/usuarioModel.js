const mongoose = require('mongoose')
const dataUtils = require('../utils/dataUtils')
const { criarHash } = require('../utils/bcryptUtils')

const usuarioSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},

	email: {
		type: String,
		index: true,
		unique: true,
		required: true
	},

	senha: {
		type: String,
		required: true
	},

	criado_em: {
		type: Date,
		default: dataUtils.dataAtual('YYYY-MM-DD')
	}
})

usuarioSchema.pre('save', async function(next) {
	this.senha = await criarHash(this.senha)
	next()
})

usuarioSchema.pre('validate', function(next) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(this.email)) {
    this.invalidate('email', 'Email inválido')
  }

  next()
})


const usuarioModel = mongoose.model('usuarios', usuarioSchema)

module.exports = usuarioModel