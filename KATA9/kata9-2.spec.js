import plantarArbol from './kata9-2';
const expected = ['Peral', 'Pera', 'pera'];

describe('Kata #9.2', () => {
  test('Test 1', () => {
    expect(plantarArbol('Peral', 'Pera')).toEqual(expect.arrayContaining(expected));
  });
});