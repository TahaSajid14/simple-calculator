import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: " number",
        name: "firstnumber",
        message: "enter first number",
    },
    {
        type: " number",
        name: "secondnumber",
        message: "enter second number",
    },
    {
        type: "list",
        name: "operator",
        message: "select operator",
        choices: ["subtraction", "multiplication", " divide", "add"]
    }
]);
let result;
if (answer.operator === 'subtraction') {
    result = answer.firstnumber - answer.secondnumber;
    console.log(result);
}
else if (answer.operator === 'multiplication') {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === 'divide') {
    result = answer.firstnumber / answer.secondnumber;
    console.log(result);
}
else if (answer.operator === 'add') {
    result = answer.firstnumber + answer.secondnumber;
    console.log(result);
}
else {
    console.log("please select valid operator");
}
/*
import inquirer from 'inquirer';

// Function to perform basic arithmetic operations
const calculator = async () => {
    const questions = [
        {
            type: 'number',
            name: 'firstNumber',
            message: 'Enter the first number:',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
        },
        {
            type: 'number',
            name: 'secondNumber',
            message: 'Enter the second number:',
        },
    ];

    // Prompt user for input
    const answers = await inquirer.prompt(questions);

    const { firstNumber, operation, secondNumber } = answers;

    let result: number;

    if (operation === 'Addition') {
        result = firstNumber + secondNumber;
        console.log(`Result: ${firstNumber} + ${secondNumber} = ${result}`);
    } else if (operation === 'Subtraction') {
        result = firstNumber - secondNumber;
        console.log(`Result: ${firstNumber} - ${secondNumber} = ${result}`);
    } else if (operation === 'Multiplication') {
        result = firstNumber * secondNumber;
        console.log(`Result: ${firstNumber} * ${secondNumber} = ${result}`);
    } else if (operation === 'Division') {
        if (secondNumber === 0) {
            console.log('Error: Cannot divide by zero.');
        } else {
            result = firstNumber / secondNumber;
            console.log(`Result: ${firstNumber} / ${secondNumber} = ${result}`);
        }
    } else {
        console.log('Invalid operation.');
    }
};

// Call the calculator function to start the program
calculator().catch(err => {
    console.error('An error occurred:', err);
});





*/

