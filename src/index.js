const express = require('express')
const app = express()
const autenticacaoRoutes = require('./routes/autenticacaoRoutes')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use(autenticacaoRoutes)

app.listen(8080, () => {
	console.log('Servidor está rodando')
})