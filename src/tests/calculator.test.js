const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// Test suite for calculator operations including modulo, power, and squareroot
describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add multiple numbers: 1 + 2 + 3 + 4 = 10', () => {
      expect(add(1, 2, 3, 4)).toBe(10);
    });

    test('should add negative numbers correctly', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should handle zero: 0 + 5 = 5', () => {
      expect(add(0, 5)).toBe(5);
    });

    test('should add decimal numbers: 1.5 + 2.5 = 4', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should return 0 for no arguments', () => {
      expect(add()).toBe(0);
    });

    test('should add large numbers correctly', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract multiple numbers: 20 - 5 - 3 = 12', () => {
      expect(subtract(20, 5, 3)).toBe(12);
    });

    test('should handle negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers correctly', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should handle zero: 10 - 0 = 10', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract decimal numbers: 5.5 - 2.5 = 3', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });

    test('should subtract from zero: 0 - 5 = -5', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply multiple numbers: 2 * 3 * 4 = 24', () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test('should handle multiplication by zero: 5 * 0 = 0', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers correctly', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply with one negative number', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should return 1 for no arguments', () => {
      expect(multiply()).toBe(1);
    });

    test('should multiply large numbers correctly', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result: 10 / 3 ≈ 3.333...', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide multiple numbers: 100 / 2 / 5 = 10', () => {
      expect(divide(100, 2, 5)).toBe(10);
    });

    test('should handle negative dividend: -20 / 5 = -4', () => {
      expect(divide(-20, 5)).toBe(-4);
    });

    test('should handle negative divisor: 20 / -5 = -4', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should handle both negative: -20 / -5 = 4', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide decimal numbers: 7.5 / 2.5 = 3', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });

    test('should throw error for division by zero in sequence', () => {
      expect(() => divide(100, 5, 0)).toThrow('Division by zero');
    });

    test('should handle dividing zero: 0 / 5 = 0', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide result in very small numbers', () => {
      expect(divide(1, 1000000)).toBeCloseTo(0.000001, 6);
    });
  });

  describe('Edge Cases and Integration', () => {
    test('should handle very large numbers', () => {
      expect(add(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('should handle very small positive numbers', () => {
      expect(multiply(0.0001, 0.0001)).toBeCloseTo(0.00000001, 8);
    });

    test('should chain operations correctly', () => {
      const result = divide(multiply(add(2, 3), 4), 2);
      expect(result).toBe(10);
    });

    test('should handle single number addition', () => {
      expect(add(5)).toBe(5);
    });

    test('should handle single number multiplication', () => {
      expect(multiply(5)).toBe(5);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo correctly: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo: 20 % 6 = 2', () => {
      expect(modulo(20, 6)).toBe(2);
    });

    test('should handle negative modulo', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should return 0 when dividend is divisible', () => {
      expect(modulo(9, 3)).toBe(0);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with divisor of zero');
    });
  });

  describe('Power', () => {
    test('should calculate power correctly: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power: 5 ^ 2 = 25', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should handle power of 0', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle base of 0', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle negative exponent', () => {
      expect(power(2, -2)).toBeCloseTo(0.25, 5);
    });

    test('should handle fractional exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large powers', () => {
      expect(power(10, 3)).toBe(1000);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root correctly: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root: √25 = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should handle square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle decimal results: √2 ≈ 1.414', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should handle square root of decimal numbers', () => {
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative decimal', () => {
      expect(() => squareRoot(-9.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle very small positive numbers', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('should handle large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });
  });
});
