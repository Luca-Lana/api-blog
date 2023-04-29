const mongoose = require('mongoose')
const dataUtils = require('../utils/dataUtils')

const publicacaoSchema = new mongoose.Schema({
	
	autor: {
		type: String,
		index: true,
		required: true
	},

	titulo: {
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

const publicacaoModel = mongoose.model('publicacoes', publicacaoSchema)

module.exports = publicacaoModel