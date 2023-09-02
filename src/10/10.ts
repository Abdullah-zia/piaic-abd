// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

const ten = () => {
  const arrOfNum = [1, 3, 4, 45, -5, 3, -6, -98, 54];

  for (let i = 0; i < arrOfNum.length; i++) {
    if (arrOfNum[i] % 2 === 0) {
      console.log(arrOfNum[i]);
    }
  }
};
export default ten;
