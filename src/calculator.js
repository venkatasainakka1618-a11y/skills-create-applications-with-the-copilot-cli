/**
 * Node.js CLI Calculator
 * Supports the following operations:
 * - Addition: add [numbers...]
 * - Subtraction: subtract [numbers...]
 * - Multiplication: multiply [numbers...]
 * - Division: divide [numbers...]
 * - Modulo: modulo <dividend> <divisor>
 * - Power: power <base> <exponent>
 * - Square Root: squareroot <number>
 */

const add = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

const subtract = (...numbers) => numbers.reduce((acc, num) => acc - num);

const multiply = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);

const divide = (...numbers) => {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      throw new Error('Division by zero');
    }
    result = result / numbers[i];
  }
  return result;
};

const modulo = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot perform modulo with divisor of zero');
  }
  return a % b;
};

const power = (base, exponent) => Math.pow(base, exponent);

const squareRoot = (n) => {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
};

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: calculator <operation> <number1> <number2> [number3...]');
    console.error('Operations: add, subtract, multiply, divide, modulo, power, squareroot');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const numbers = args.slice(1).map(num => parseFloat(num));

  if (numbers.some(isNaN)) {
    console.error('Error: All arguments must be valid numbers');
    process.exit(1);
  }

  let result;

  try {
    if (operation === 'add') {
      result = add(...numbers);
      console.log(`${numbers.join(' + ')} = ${result}`);
    } else if (operation === 'subtract') {
      result = subtract(...numbers);
      console.log(`${numbers.join(' - ')} = ${result}`);
    } else if (operation === 'multiply') {
      result = multiply(...numbers);
      console.log(`${numbers.join(' × ')} = ${result}`);
    } else if (operation === 'divide') {
      result = divide(...numbers);
      console.log(`${numbers.join(' ÷ ')} = ${result}`);
    } else if (operation === 'modulo') {
      if (numbers.length !== 2) {
        console.error('Error: Modulo requires exactly 2 numbers');
        process.exit(1);
      }
      result = modulo(numbers[0], numbers[1]);
      console.log(`${numbers[0]} % ${numbers[1]} = ${result}`);
    } else if (operation === 'power') {
      if (numbers.length !== 2) {
        console.error('Error: Power requires exactly 2 numbers (base and exponent)');
        process.exit(1);
      }
      result = power(numbers[0], numbers[1]);
      console.log(`${numbers[0]} ^ ${numbers[1]} = ${result}`);
    } else if (operation === 'squareroot') {
      if (numbers.length !== 1) {
        console.error('Error: Square root requires exactly 1 number');
        process.exit(1);
      }
      result = squareRoot(numbers[0]);
      console.log(`√${numbers[0]} = ${result}`);
    } else {
      console.error(`Error: Unknown operation '${operation}'`);
      console.error('Operations: add, subtract, multiply, divide, modulo, power, squareroot');
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
