const publicacaoModel = require('../models/publicacaoModel')
const comentarioModel = require('../models/comentarioModel')

module.exports = {

	async criarComentario (req, res) {
		try {
			const { id:idPublicacao } = req.params
			const { conteudo } = req.body
			let { autor } = req.headers		
			let publicacao = await publicacaoModel.findOne({_id: idPublicacao})
			await comentarioModel.create({idAutor: autor, idPublicacao, conteudo})
			res.status(200).json({msg: 'Cometário feito com sucesso'})
		} catch (erro) {
			res.status(400).json({msg: 'Houve um problema ao comentar'})
		}
	},

	async removerComentario (req, res) {

	}
}