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
        return enderecoCriado
    } catch(error) {
        console.error('error ===> ', error)
    }
}

module.export = inserirEndereco