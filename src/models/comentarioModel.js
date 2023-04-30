const mongoose = require('mongoose')
const dataUtils = require('../utils/dataUtils')

const comentarioSchema = new mongoose.Schema({
	
	idAutor: {
		type: String,
		index: true,
		required: true
	},

	idPublicacao: {
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
	}
})

const comentarioModel = mongoose.model('comentarios', comentarioSchema)

module.exports = comentarioModel