const express = require('express')
const app = express()
require('./config/databaseConfig.js')
const autenticacaoRoutes = require('./routes/autenticacaoRoutes')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use(autenticacaoRoutes)

app.listen(8080, () => {
	console.log('Servidor está rodando')
})