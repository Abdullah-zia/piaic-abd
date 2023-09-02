"use strict";
// Write a program that uses a while loop to print the first 10 even numbers.
Object.defineProperty(exports, "__esModule", { value: true });
const fourth = () => {
    let i = 0;
    let firstTenCount = 1;
    while (firstTenCount < 10) {
        if (i % 2 === 0) {
            console.log(i);
            firstTenCount++;
        }
        i++;
    }
};
exports.default = fourth;
