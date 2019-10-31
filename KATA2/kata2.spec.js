import sumPos from './kata2';

describe('Kata #2: SumPos', () => {
  test('Test 1', () => {
    expect(sumPos([])).toBe(0);
  });
});

describe('Kata #2: SumPos', () => {
  test('Test 2', () => {
    expect(sumPos([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe('Kata #2: SumPos', () => {
  test('Test 3', () => {
    expect(sumPos([1, -2, 3, 4, 5])).toBe(13);
  });
});

describe('Kata #2: SumPos', () => {
  test('Test 4', () => {
    expect(sumPos([-1, 2, 3, 4, -5])).toBe(9);
  });
});

describe('Kata #2: SumPos', () => {
  test('Test 4', () => {
    expect(sumPos([-1, -2, -3, -4, -5])).toBe(0);
  });
});
