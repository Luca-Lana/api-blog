module.exports = {
	dataAtual(formato) {
		const dataAtual = new Date(Date.now())

		const dia = String(dataAtual.getDate()).padStart(2, '0')
		const mes = String((dataAtual.getMonth() + 1)).padStart(2, '0')
		const ano = dataAtual.getFullYear()

		return formato.replace('DD', dia).replace('MM', mes).replace('YYYY', ano)
	}
}