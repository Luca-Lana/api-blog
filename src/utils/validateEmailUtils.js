module.exports = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(this.email)) {
  	return false
  }
  return true
}