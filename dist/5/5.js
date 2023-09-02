"use strict";
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
Object.defineProperty(exports, "__esModule", { value: true });
const five = () => {
    const calcFactorial = (val) => {
        if (val < 0) {
            return "Invalid";
        }
        // Calculate the factorial
        let result = 1;
        for (let i = 2; i <= val; i++) {
            result *= i;
        }
        return result;
    };
    const factorialResult1 = calcFactorial(-5);
    const factorialResult2 = calcFactorial(5);
    console.log(factorialResult1);
    console.log(factorialResult2);
};
exports.default = five;
