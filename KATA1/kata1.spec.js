import parImpar from './kata1';

describe('Kata #1: Par', () => {
  test('Test 1', () => {
    expect(parImpar(0)).toBe('PAR');
  });
});

describe('Kata #1: Par', () => {
  test('Test 2', () => {
    expect(parImpar(1)).toBe('IMPAR');
  });
});

describe('Kata #1: Par', () => {
  test('Test 3', () => {
    expect(parImpar(2)).toBe('PAR');
  });
});

describe('Kata #1: Par', () => {
  test('Test 4', () => {
    expect(parImpar(3)).toBe('IMPAR');
  });
});
