const publicacaoModel = require('../models/publicacaoModel')
const comentarioModel = require('../models/comentarioModel')

module.exports = {

	async obterPublicacoes (req, res) {
		try {
			let resultado = await publicacaoModel.find().select(['autor', 'titulo', 'conteudo', 'criado_em'])
			res.status(200).json({publicacoes: resultado})
		} catch (erro) {
			console.error(erro)
			res.status(400).json({msg: 'Erro ao acessar as publicações'})
		}
	},

	async obterPublicacaoId (req, res) {
		try {
			const { id:idPublicacao } = req.params
			let resultadoPublicacao = await publicacaoModel.findOne({_id: idPublicacao})
																				.select(['autor', 'titulo', 'conteudo', 'criado_em', 'atualizado_em'])
			let resultadoComentarios = await comentarioModel.find({post: resultadoPublicacao._id})
																				.select(['autor', 'conteudo', 'criado_em', 'atualizado_em'])
			res.status(200).json({publicacao: resultadoPublicacao, comentarios: resultadoComentarios})
		} catch (erro) {
			if (erro.message.includes('Cast to ObjectId')) {
				res.status(400).json({msg: 'Publicação não existe'})
			} else {
				res.status(400).json({msg: 'Erro ao acessar publicacão'})
			}
		}
	},

	async criarPublicacao(req, res) {
		try {
			let { titulo, conteudo} = req.body
			let { autor } = req.headers			
			await publicacaoModel.create({autor, titulo, conteudo})
			res.status(200).json({msg: 'Publicação criada com sucesso'})
		} catch (erro) {
			if (erro.message.includes('duplicate key')) {
				res.status(400).json({msg: 'Esse titulo já esta sendo usado'})
			} else {
				res.status(400).json({msg: 'Erro ao criar publicacão'})
			}
		}
	},

	async removerPublicacao(req, res) {
		try {
			let { id:idPublicacao } = req.params
			await publicacaoModel.deleteOne({_id: idPublicacao})
			await comentarioModel.deleteMany({post: idPublicacao})
			res.status(200).json({msg: 'Publicação removida com sucesso'})
		} catch (erro) {
			if (erro.message.includes('Cast to ObjectId')) {
				res.status(400).json({msg: 'Publicação não existe'})
			} else {
				res.status(400).json({msg: 'Erro ao remover publicacão'})
			}
		}
	}
}