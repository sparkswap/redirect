const { REDIRECT_URL } = process.env
module.exports = (req ,res) => {
  if (!REDIRECT_URL) {
    return 'Please provide the REDIRECT_URL environment variable'
  }

  res.writeHead(301, { REDIRECT_URL })
  res.end()
}
