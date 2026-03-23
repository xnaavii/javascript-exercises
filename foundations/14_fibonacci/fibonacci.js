const fibonacci = function (index) {
  // Sum two preceding numbers, start with 1
  // Return value of the index passed in
  // 1, 1, 2, 3, 5, 8, 13, 21...
  if (index < 0) {
    return 'OOPS';
  }

  const arr = [0, 1];
  for (let i = 0; i < index; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr[index];
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
