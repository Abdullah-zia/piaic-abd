"use strict";
// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
Object.defineProperty(exports, "__esModule", { value: true });
const first = () => {
    const newFunction = (arr, ind, val) => {
        arr.splice(ind, 0, val);
        return arr;
    };
    const myArray = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    const updatedFunction = newFunction(myArray, 3, 4);
    console.log(updatedFunction, "updatedFunction");
};
exports.default = first;
