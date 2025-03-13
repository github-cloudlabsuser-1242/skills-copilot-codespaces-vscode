const Calculator = require('./test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should divide positive numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('should divide negative numbers correctly', () => {
        expect(calculator.divide(-6, 3)).toBe(-2);
        expect(calculator.divide(6, -3)).toBe(-2);
        expect(calculator.divide(-6, -3)).toBe(2);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow("Division by zero is not allowed.");
    });
});