const express = require('express')
const db = require('./dbconfig')

const searchCEPnumber = require('./src/routes/searchCEPnumber')
const cors = require('cors')

const app = express()
const port = 8084

db.authenticate().then(() => {
    console.log('Sequelize => Conectado com sucesso.')
 }).catch((error) => {
    console.error('Sequelize => Problema para conectar com o DB: ', error)
})

app.use(cors())
app.use(searchCEPnumber)

app.listen(port, _ => console.log(`Programa executando na porta ${port}`))