import elimina_primer_y_ultimo from './kata4';

describe('Kata #4: elimina primer y ultimo', () => {
  test('Test 1', () => {
    expect(elimina_primer_y_ultimo('JavaScript')).toBe('avaScrip');
  });
});

describe('Kata #4: elimina primer y ultimo', () => {
  test('Test 2', () => {
    expect(elimina_primer_y_ultimo('Alejandría')).toBe('lejandrí');
  });
});

describe('Kata #4: elimina primer y ultimo', () => {
  test('Test 3', () => {
    expect(elimina_primer_y_ultimo('hidrógeno')).toBe('idrógen');
  });
});

describe('Kata #4: elimina primer y ultimo', () => {
  test('Test 4', () => {
    expect(elimina_primer_y_ultimo('ok')).toBe('ok');
  });
});
