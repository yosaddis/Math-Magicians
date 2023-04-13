import operate from '../logic/operate';

describe('checks for all mathimatical operations are working correctly.', () => {
  test('should return 2 when adding 1 and 1', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
  test('should return 0 when subtracting 1 from 1', () => {
    expect(operate(1, 1, '-')).toBe('0');
  });
  test('should return 1 when multiplying 1 and 1', () => {
    expect(operate(1, 1, 'x')).toBe('1');
  });
  test('should return 1 when dividing 1 by 1', () => {
    expect(operate(1, 1, '÷')).toBe('1');
  });
  test('Finds the modulus of 1 and 1', () => {
    expect(operate(1, 1, '%')).toBe('0');
  });
});
