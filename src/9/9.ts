// Develop a program that calculates and prints the sum of the first n even numbers using a for loop

const nine = () => {
  const n: number = 10;
  let i: number = 1;
  let sum: number = 0;

  for (i; i <= n; i++) {
    const evenNumber = 2 * i;
    sum = sum + evenNumber;
  }

  console.log(sum, "sum");
};

export default nine;
