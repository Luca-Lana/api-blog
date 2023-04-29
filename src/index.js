const express = require('express')
const app = express()
require('./config/databaseConfig.js')
const autenticacaoRoutes = require('./routes/autenticacaoRoutes')
const publicacaoRoutes = require('./routes/publicacaoRoutes')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use(autenticacaoRoutes)

app.use(publicacaoRoutes)

app.listen(8080, () => {
	console.log('Servidor está rodando')
})