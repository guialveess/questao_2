const { soma, subtracao, divisao } = require('./sum');

test('Soma 1 + 2 igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('Subtrai 4 - 2 para igual a 2', () => {
    expect(subtracao(4, 2)).toBe(2);
});

test('Divide 6 por 3 para ser igual a 2', () => {
    expect(divisao(6, 3)).toBe(2);
});

test('Dividir por zero gera um erro', () => {
    expect(() => { divisao(6, 0); }).toThrow();
});