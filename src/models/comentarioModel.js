const mongoose = require('mongoose')
const dataUtils = require('../utils/dataUtils')

const comentarioSchema = new mongoose.Schema({
	
	autor: {
		type: String,
		index: true,
		required: true
	},

	post: {
		type: String,
		required: true
	},

	conteudo: {
		type: String,
		required: true
	},

	criado_em: {
		type: Date,
		default: dataUtils.dataAtual('YYYY-MM-DD')
	},

	atualizado_em: {
		type: Date,
	}
})

const comentarioModel = mongoose.model('comentarios', comentarioSchema)

module.exports = comentarioModel