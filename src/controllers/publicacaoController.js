const publicacaoModel = require('../models/publicacaoModel')

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

	async criarPublicacao(req, res) {
		try {
			let { titulo, conteudo} = req.body
			let { autor } = req.headers			
			let resultado = await publicacaoModel.create({autor, titulo, conteudo})
			res.status(200).json({msg: 'Publicação criada com sucesso'})
		} catch (erro) {
			if (erro.message.includes('duplicate key')) {
				res.status(400).json({msg: 'Esse titulo já esta sendo usado'})
			} else {
				res.status(400).json({msg: 'Erro ao criar publicacão'})
			}
		}
	}
}