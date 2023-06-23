const express = require('express')
const {findCEPnumber} = require('../controller/clients')

const router = express.Router()

router.get('/searchCEPnumber/:cep', findCEPnumber)

module.exports = router