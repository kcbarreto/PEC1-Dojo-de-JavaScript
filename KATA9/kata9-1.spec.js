import plantarArbol from './kata9-1';
const expected = ['Peral', 'Pera'];
describe('Kata #9.1', () => {
  test('Test 1', () => {
    expect(plantarArbol('mazano', 9)).toBeNull();
  });
});

describe('Kata #9.1', () => {
  test('Test 2', () => {
    expect(plantarArbol('Peral', 'Pera')).toEqual(expect.arrayContaining(expected));
  });
});
