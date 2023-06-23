const Endereco = require("../models/enderecoModel") 
const axios = require('axios')
const inserirEndereco = require("../services/inserirEndereco")

const findCEPnumber = async (req, res) => {
    try{
        const cep = req.params.cep.toString()
        let posicaoInsercao = 5;
        let cephifen = cep.slice(0, posicaoInsercao) + "-" + cep.slice(posicaoInsercao);
        const endereco = await Endereco.findOne({ where: { cep: cephifen }})
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