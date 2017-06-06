const { REDIRECT_URL } = process.env
if (!REDIRECT_URL) {
  throw new Error('You must provide the REDIRECT_URL environment variable!')
}

module.exports = (req, res) => {
  const Location = `${REDIRECT_URL}${req.url.substr(1)}`
  res.writeHead(301, { Location })
  res.end()
}
