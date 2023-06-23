const express = require('express')
const db = require('./dbconfig')
const searchCEPnumber = require('./src/routes/user')
const cors = require('cors')
const redis = require('redis')

const app = express()


app.use(cors())
app.use(searchCEPnumber)

db.sync()
  .then(() => {
    console.log('Tabelas sincronizadas com o banco de dados.')
    app.listen(8084, () => {
      console.log('Servidor rodando na porta 8084.');
    })
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error)
});