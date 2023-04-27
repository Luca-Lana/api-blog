const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.URL)
.then(() => { 
	console.log('Banco de dados conectado')
})
.catch((erro) => { 
	console.log('Erro: '+ erro)
})