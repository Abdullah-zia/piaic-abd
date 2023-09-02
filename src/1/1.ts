// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

const first = () => {
  const newFunction = (arr: number[], ind: number, val: number) => {
    arr.splice(ind, 0, val);
    return arr;
  };

  const myArray: number[] = [1, 2, 3, 5, 6, 7, 8, 9, 10];

  const updatedFunction = newFunction(myArray, 3, 4);
  console.log(updatedFunction, "updatedFunction");
};

export default first;
