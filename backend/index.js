const express = require('express')

const searchCEPnumber = require('./routes/searchCEPnumber')
const cors = require('cors')

const app = express()
const port = 8084

app.use(cors())
app.use(searchCEPnumber)

app.listen(port, _ => console.log(`Programa executando na porta ${port}`))