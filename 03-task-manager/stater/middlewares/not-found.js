const notFound = (req, res) => {
    res.status(404).send('Router does not exits')
}

module.exports = notFound