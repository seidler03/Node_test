import Item from "../item";

describe('Teste dos Itens', () => {
    it('Deve ter 3 campos: nome, valor e quantidade', () => {
        const item = new Item('Beterraba', 2.5, 10);

        expect(item.nome).toBe('Beterraba');
        expect(item.quantidade).toBe(10);
        expect(item.valor).toBe(2.5);
    });

    it('Deve ter o preço calculado de acordo com a quantidade', () => {
        const item = new Item('Bataa', 0.1, 3);

        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
    })
})