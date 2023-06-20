const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://viacep.com.br/ws/01001000/json/');
      const data = response.data;
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router