// FIRST TRY
// const sumAll = function (num1, num2) {
//   // No negative numbers
//   if (num1 < 0 || num2 < 0) {
//     return 'ERROR';
//   }

//   // Make sure numbers are passed in
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     return 'ERROR';
//   }

//   // Check that parameters are integeres
//   if (num1 !== parseInt(num1, 10) || num2 !== parseInt(num2, 10)) {
//     return 'ERROR';
//   }

//   let numbersArr = [];
//   let min = num1 > num2 ? num2 : num1;
//   let max = num2 < num1 ? num1 : num2;
//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     numbersArr.push(i);
//   }

//   for (let i = 0; i < numbersArr.length; i++) {
//     sum += numbersArr[i];
//   }

//   return sum;
// };

const sumAll = function (num1, num2) {
  // No negative numbers
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  // Make sure numbers are passed in
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR';
  }

  // Check that parameters are integeres
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  }

  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  const arrLength = max - min + 1;

  return Array.from({ length: arrLength }, (_, i) => min + i).reduce(
    (acc, curr) => acc + curr,
    0,
  );
};

// Do not edit below this line
module.exports = sumAll;
