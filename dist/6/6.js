"use strict";
//  Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
Object.defineProperty(exports, "__esModule", { value: true });
const six = () => {
    const arrOfNum = [1, 3, 4, 45, -5, 3, -6, -98, 54];
    const arrOfPositiveNumber = arrOfNum.filter((e) => {
        return e > 0;
    });
    console.log(arrOfPositiveNumber);
};
exports.default = six;
