const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('Simple Calculator');
    console.log('-----------------');
    console.log('1. Addition (+)');
    console.log('2. Subtraction (-)');
    console.log('3. Multiplication (*)');
    console.log('4. Division (/)');
    console.log('5. Exit');
    console.log('Choose an operation: ');
}

function performOperation(choice, num1, num2) {
    switch (choice) {
        case '1':
            return num1 + num2;
        case '2':
            return num1 - num2;
        case '3':
            return num1 * num2;
        case '4':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                console.log('Error: Division by zero is not allowed.');
                return null;
            }
        default:
            console.log('Invalid choice. Please try again.');
            return null;
    }
}

function getNumber(prompt, callback) {
    rl.question(prompt, (input) => {
        const number = parseFloat(input);
        if (isNaN(number)) {
            console.log('Invalid input. Please enter a valid number.');
            getNumber(prompt, callback);
        } else {
            callback(number);
        }
    });
}

function main() {
    showMenu();
    rl.question('', (choice) => {
        if (choice === '5') {
            console.log('Exiting the calculator. Goodbye!');
            rl.close();
            return;
        }

        getNumber('Enter first number: ', (num1) => {
            getNumber('Enter second number: ', (num2) => {
                const result = performOperation(choice, num1, num2);
                if (result !== null) {
                    console.log(`Result: ${result}`);
                }
                console.log('');
                main();
            });
        });
    });
}

main();