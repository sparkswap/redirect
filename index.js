module.exports = (req ,res) => {
  res.writeHead(301, { Location: process.env.REDIRECT_URL })
  res.end()
}
