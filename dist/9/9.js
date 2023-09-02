"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop
Object.defineProperty(exports, "__esModule", { value: true });
const nine = () => {
    const n = 10;
    let i = 1;
    let sum = 0;
    for (i; i <= n; i++) {
        const evenNumber = 2 * i;
        sum = sum + evenNumber;
    }
    console.log(sum, "sum");
};
exports.default = nine;
