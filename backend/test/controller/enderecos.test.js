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

    test('deve inserir o endereco se nao estiver cadastrado', async () => {
        const req = { params: { cep: '123456789' } }
        const res = { json: jest.fn() }
        const enderecoMock = { cep: '12345678', rua: 'Rua Teste', cidade: 'Cidade Teste' }
        const axiosResponseMock = { data: enderecoMock }

        Endereco.findOne.mockResolvedValueOnce(null)

        axios.get.mockResolvedValueOnce(axiosResponseMock)

        await findCEPnumber(req, res)

        expect(inserirEndereco).toHaveBeenCalledWith(enderecoMock)
        expect(res.json).toHaveBeenCalledWith(enderecoMock)        
    })

    test('deve retornar erro do servidoer em caso de excecao', async () => {
        const req = { params: { cep: '12345678' } }
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
        const errorMock = new Error('Erro do Servidor')
    })
})