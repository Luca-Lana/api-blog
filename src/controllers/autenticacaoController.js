const { criarHash, verificarSenha} = require('../utils/bcryptUtils')
const usuarioModel = require('../models/usuarioModel')

module.exports = {
	async cadastrarUsuario(req, res) {
		let {nome, email, senha} = req.body
		try {
			const novoUsuario = new usuarioModel({nome, email, senha})
			let resultado = await novoUsuario.save()
			if (resultado === novoUsuario) {
				res.status(201).json({msg: 'Usuário criado com sucesso'})
			}
		} catch (erro) {
			if (erro.message.includes('duplicate key')) {
				res.status(400).json({msg: 'Esse email já esta sendo usado'})
			} else if (erro.message.includes('Email inválido')) {
				res.status(400).json({msg: 'Email inválido'})
			} else {
				res.status(400).json({msg: 'Erro ao criar usuário'})
			}
		}
		
	},

	async logarUsuario(req, res) {
		let {email, senha} = req.body
		res.json({email, senha, senhaValida})
	}
}