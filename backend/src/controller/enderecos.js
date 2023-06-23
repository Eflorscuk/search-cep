const Endereco = require("../models/enderecoModel") 
const axios = require('axios')

const findCEPnumber = async (req, res) => {
    try{
        console.log(`===> Client`, Endereco)
        const cep = req.params.cep.toString()
        let posicaoInsercao = 5;
        let cephifen = cep.slice(0, posicaoInsercao) + "-" + cep.slice(posicaoInsercao);
        const endereco = await Endereco.findOne({ where: { cep: cephifen }})
        console.log(`Endereco ====>`, endereco)
        if(endereco) {
            console.log(`====> Vim para o if`)
            console.log(`====> endereco`, endereco)
            res.json(endereco)
        } else {
            console.log(`====> Vim para o else`)
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            const data = response.data
            inserirEndereco(data)
            res.json(data)
        }
    }catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Erro do Servidor' })
    }
}

const inserirEndereco = async(data) => {
    try {
        const novoEndereco = {
            cep: data.cep,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
        }

        const enderecoCriado = await Endereco.create(novoEndereco)
        console.log(`Teste ===>`, enderecoCriado)
    } catch(error) {
        console.error('error ===> ', error)
    }
}

module.exports = {findCEPnumber}