const inserirEndereco = require('../src/services/inserirEndereco')
const Endereco = require('../src/models/enderecoModel')

test('deve criar um novo endereço corretamente', async () => {
    // Arrange
    const data = {
        cep: '82100-240',
        logradouro: 'exemplo de tal',
        bairro: 'Bairro da felicidade',
        cidade: 'curitibanos',
        estado: 'SC'
    }
  
    // Act
    const enderecoCriado = await Endereco.create(data)
  
    // Assert
    expect(enderecoCriado).toBeDefined()
    expect(enderecoCriado.cep).toBe(data.cep)
    expect(enderecoCriado.logradouro).toBe(data.logradouro)
    expect(enderecoCriado.bairro).toBe(data.bairro)
    expect(enderecoCriado.cidade).toBe(data.cidade)
    expect(enderecoCriado.estado).toBe(data.estado)
})