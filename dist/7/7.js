"use strict";
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
Object.defineProperty(exports, "__esModule", { value: true });
const seven = () => {
    const arrOfNum = [1, 3, 4, 45, -5, 3, -6, -98, 54];
    let i = 0;
    let sum = 0;
    while (i < arrOfNum.length) {
        sum = sum + i;
        i++;
    }
    console.log(sum, "sum");
};
exports.default = seven;
