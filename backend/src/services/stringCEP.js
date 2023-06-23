const stringCEP = string => {
    let posicaoInsercao = 5
    string = string.toString()
    return string.slice(0, posicaoInsercao) + "-" + string.slice(posicaoInsercao)
}

module.exports = stringCEP