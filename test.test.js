const assert = require('assert');
const sinon = require('sinon');
const calculatorModule = require('./test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator Tests', function() {
    let promptStub;

    beforeEach(function() {
        promptStub = sinon.stub(require('prompt-sync')());
        calculatorModule.__set__('prompt', promptStub);
    });

    afterEach(function() {
        sinon.restore();
    });

    it('should add two numbers correctly', function() {
        promptStub.onCall(0).returns('1');
        promptStub.onCall(1).returns('5');
        promptStub.onCall(2).returns('3');

        const consoleSpy = sinon.spy(console, 'log');
        calculatorModule.calculator();

        assert(consoleSpy.calledWith('5 + 3 = 8'));
        consoleSpy.restore();
    });

    it('should subtract two numbers correctly', function() {
        promptStub.onCall(0).returns('2');
        promptStub.onCall(1).returns('5');
        promptStub.onCall(2).returns('3');

        const consoleSpy = sinon.spy(console, 'log');
        calculatorModule.calculator();

        assert(consoleSpy.calledWith('5 - 3 = 2'));
        consoleSpy.restore();
    });

    it('should multiply two numbers correctly', function() {
        promptStub.onCall(0).returns('3');
        promptStub.onCall(1).returns('5');
        promptStub.onCall(2).returns('3');

        const consoleSpy = sinon.spy(console, 'log');
        calculatorModule.calculator();

        assert(consoleSpy.calledWith('5 * 3 = 15'));
        consoleSpy.restore();
    });

    it('should divide two numbers correctly', function() {
        promptStub.onCall(0).returns('4');
        promptStub.onCall(1).returns('6');
        promptStub.onCall(2).returns('3');

        const consoleSpy = sinon.spy(console, 'log');
        calculatorModule.calculator();

        assert(consoleSpy.calledWith('6 / 3 = 2'));
        consoleSpy.restore();
    });

    it('should handle division by zero', function() {
        promptStub.onCall(0).returns('4');
        promptStub.onCall(1).returns('6');
        promptStub.onCall(2).returns('0');

        const consoleSpy = sinon.spy(console, 'log');
        calculatorModule.calculator();

        assert(consoleSpy.calledWith('6 / 0 = Error! Division by zero.'));
        consoleSpy.restore();
    });

    it('should calculate percentage correctly', function() {
        promptStub.onCall(0).returns('5');
        promptStub.onCall(1).returns('50');
        promptStub.onCall(2).returns('200');

        const consoleSpy = sinon.spy(console, 'log');
        calculatorModule.calculator();

        assert(consoleSpy.calledWith('50 is 25% of 200'));
        consoleSpy.restore();
    });

    it('should handle invalid input', function() {
        promptStub.onCall(0).returns('invalid');

        const consoleSpy = sinon.spy(console, 'log');
        calculatorModule.calculator();

        assert(consoleSpy.calledWith('Invalid input. Please enter a valid choice.'));
        consoleSpy.restore();
    });
});