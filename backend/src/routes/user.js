const express = require('express')
const {findCEPnumber} = require('../controller/enderecos')

const router = express.Router()

router.get('/searchCEPnumber/:cep', findCEPnumber)

module.exports = router