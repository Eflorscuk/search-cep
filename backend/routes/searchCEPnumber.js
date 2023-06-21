const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/searchCEPnumber/:cep', async (req, res) => {
  try {
      const cep = req.params.cep.toString()
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const data = response.data
      console.log(data)
      res.json(data)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro do Servidor' })
    }
})

module.exports = router