// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

const eight = () => {
  const temperaturesInC = [0, 10, 20, 30, 40];
  const temperaturesInF = [];

  let i = 0;
  while (i < temperaturesInC.length) {
    const celsius = temperaturesInC[i];
    const fahrenheit = (celsius * 9) / 5 + 32;

    temperaturesInF.push(fahrenheit);

    i++;
  }

  console.log(temperaturesInC, "celsius");
  console.log(temperaturesInF, "fahrenheit");
};

export default eight;
