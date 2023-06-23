const Endereco = require("../models/enderecoModel") 
const axios = require('axios')
const inserirEndereco = require("../services/inserirEndereco")
const stringCEP = require("../services/stringCEP")

const findCEPnumber = async (req, res) => {
    try{
        const cep = req.params.cep
    /*let posicaoInsercao = 5
        let cephifen = cep.slice(0, posicaoInsercao) + "-" + cep.slice(posicaoInsercao)*/
        const result = stringCEP(cep)
        const endereco = await Endereco.findOne({ where: { cep: result }})
        if(endereco) {
            console.log(`===> Fui pelo IF`)
            res.json(endereco)
        } else {
            console.log(`===> Fui pelo ELSE`)
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            const data = response.data
            inserirEndereco(data)
            if(data.erro) {
                data = {}
            }
            res.json(data)
        }
    }catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Erro do Servidor' })
    }
}



module.exports = {findCEPnumber}