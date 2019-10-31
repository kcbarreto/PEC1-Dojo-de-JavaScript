import repiteString from './kata3';

describe('Kata #3: RepetirString', () => {
  test('Test 1', () => {
    expect(repiteString('JavaScript', 0)).toBe('');
  });
});

describe('Kata #3: RepetirString', () => {
  test('Test 2', () => {
    expect(repiteString('miau', 1)).toBe('miau');
  });
});

describe('Kata #3: RepetirString', () => {
  test('Test 3', () => {
    expect(repiteString('hola', 3)).toBe('holaholahola');
  });
});

describe('Kata #3: RepetirString', () => {
  test('Test 3', () => {
    expect(repiteString('?', 10)).toBe('??????????');
  });
});
