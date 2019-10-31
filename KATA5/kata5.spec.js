import elimina_los_espacios from './kata5';

describe('Kata #5: elimina los espacios', () => {
  test('Test 1', () => {
    expect(elimina_los_espacios('buenos días')).toBe('buenosdías');
  });
});

describe('Kata #5: elimina los espacios', () => {
  test('Test 2', () => {
    expect(elimina_los_espacios(' pastel de zanahoria ')).toBe('pasteldezanahoria');
  });
});

describe('Kata #5: elimina los espacios', () => {
  test('Test 3', () => {
    expect(elimina_los_espacios('dábale arroz a la zorra el abad')).toBe(
      'dábalearrozalazorraelabad'
    );
  });
});
