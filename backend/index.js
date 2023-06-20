const express = require('express')

const searchRouter = require('./routes/search')

const app = express()
const port = 8084

app.use('/search', searchRouter)

app.listen(port, _ => console.log(`Programa executando na porta ${port}`))