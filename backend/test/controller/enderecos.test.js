const { findCEPnumber } = require('../../src/controller/enderecos')
const Endereco = require('../../src/models/enderecoModel')
const axios = require('axios')
const inserirEndereco = require('../../src/services/inserirEndereco')
const stringCEP = require('../../src/services/stringCEP')

jest.mock('../../src/models/enderecoModel')
jest.mock('axios')
jest.mock('../../src/services/inserirEndereco')
jest.mock('../../src/services/stringCEP')

describe('findCEPnumber', () => {
    beforeEach(() => jest.clearAllMocks())

    test('deve retornar o endereco se ja estiver cadastrado', async () => {
        const req = { params: { cep: '123456789' } }
        const res = { json: jest.fn() }
        const enderecoMock = { cep: '12345678', rua: 'Rua Teste', cidade: 'Cidade Teste' }

        Endereco.findOne.mockResolvedValueOnce(enderecoMock)

        await findCEPnumber(req, res)

        expect(res.json).toHaveBeenCalledWith(enderecoMock)
    })
})