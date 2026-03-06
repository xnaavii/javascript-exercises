const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((prev, curr) => prev * curr);
};

const power = function (num, numPow) {
  return Math.pow(num, numPow);
};

const factorial = function (n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
