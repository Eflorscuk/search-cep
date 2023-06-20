const express = require('express')

const search = require('./routes/search')
const axios = require('axios')

const app = express()
const port = 8084

app.use(search)

app.listen(port, _ => console.log(`Programa executando na porta ${port}`))