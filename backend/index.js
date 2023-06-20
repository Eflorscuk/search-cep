const express = require('express')
const app = express()

const port = 8084

app.listen(port, _ => console.log(`Programa executando na porta ${port}`))