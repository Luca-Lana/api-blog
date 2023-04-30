const publicacaoModel = require('../models/publicacaoModel')
const comentarioModel = require('../models/comentarioModel')

module.exports = {

	async criarComentario (req, res) {
		try {
			let { id:idPublicacao } = req.params
			let { conteudo } = req.body
			let { idAutor } = req.headers		
			let publicacao = await publicacaoModel.findOne({_id: idPublicacao})
			await comentarioModel.create({idAutor, idPublicacao, conteudo})
			res.status(200).json({msg: 'Cometário feito com sucesso'})
		} catch (erro) {
			res.status(400).json({msg: 'Houve um problema ao comentar'})
		}
	},

	async removerComentario (req, res) {
		try {
			let { id } = req.params
			await comentarioModel.deleteOne({_id: id})
			res.status(200).json({msg: 'Comentario excluido com sucesso'})
		} catch (erro) {
			res.status(400).json({msg: 'Problema ao excluir comentario'})
		}
	}
}