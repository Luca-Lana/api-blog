const { verificarSenha } = require('../utils/bcryptUtils')
const { criarToken } = require('../utils/jwtUtils')
const usuarioModel = require('../models/usuarioModel')
const validarEmail = require('../utils/validarEmailUtils')

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
				res.status(500).json({msg: 'Erro ao criar usuário'})
			}
		}
		
	},

	async logarUsuario(req, res) {
		let {email, senha} = req.body
		try {
			let resultado = await usuarioModel.findOne({email: email})
			if (!resultado && validarEmail(email)) {
				res.status(400).json({msg: 'Email incorreto'})
			} else {
				let senhaValida = await verificarSenha(senha,resultado.senha)
				if (senhaValida) {
					let token = await criarToken({id: resultado._id, email: resultado.email})
					res.status(200).json({msg: 'Logado', token})
				} else {
					res.status(400).json({msg: 'Senha incorreta'})
				}
			}
		} catch (erro) {
			res.status(500).json({msg: 'Erro ao logar'})
		}
	}
}