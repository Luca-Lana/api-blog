const mongoose = require('mongoose')
const dataUtils = require('../utils/dataUtils')
const bcryptUtils = require('../utils/bcryptUtils')

const usuarioSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},

	email: {
		type: String,
		index: true,
		unique:true,
		required: function () {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return emailRegex.test(this.email)
		}
	},

	senha: {
		type: String,
		required: true
	},

	criado_em: {
		type: Date,
		default: dataUtils.dataAtual('DD/MM/YYYY')
	}
})

UserSchema.pre('save', async (next) => {

	this.senha = await bcryptUtils.criarHash(this.senha)
	next()
})

const usuarioModel = mongoose.Model('usuario', usuarioSchema, 'usuarios')

module.exports = usuarioModel