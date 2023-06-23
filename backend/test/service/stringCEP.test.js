const stringCEP = require('../../src/services/stringCEP')

test('deve formatar corretamente o CEP', () => {
    // Arrange
    const input = '12345678'
    const expectedOutput = '12345-678'

    // Act
    const result = stringCEP(input)

    // Assert
    expect(result).toEqual(expectedOutput)
})
