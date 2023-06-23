const ClientRepository = require("../models/clientsModel") 
const axios = require('axios')

const findCEPnumber = async (req, res) => {
    try{
        const cep = req.params.cep
        const endereco = await ClientRepository.findOne({
            where: {
                cep: cep
            },
        })
        if(endereco) {
            res.json(endereco)
        } else {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            const data = response.data
            console.log(data)
            res.json(data)
        }
    }catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Erro do Servidor' })
    }
}

module.exports = {findCEPnumber}