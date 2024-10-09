const assert = require('assert');
const { performOperation } = require('./test');

describe('performOperation', function() {
    it('should return the sum of two numbers for choice 1', function() {
        assert.strictEqual(performOperation('1', 5, 3), 8);
    });

    it('should return the difference of two numbers for choice 2', function() {
        assert.strictEqual(performOperation('2', 5, 3), 2);
    });

    it('should return the product of two numbers for choice 3', function() {
        assert.strictEqual(performOperation('3', 5, 3), 15);
    });

    it('should return the quotient of two numbers for choice 4', function() {
        assert.strictEqual(performOperation('4', 6, 3), 2);
    });

    it('should return null and log error for division by zero', function() {
        assert.strictEqual(performOperation('4', 6, 0), null);
    });

    it('should return null for invalid choice', function() {
        assert.strictEqual(performOperation('invalid', 5, 3), null);
    });
});