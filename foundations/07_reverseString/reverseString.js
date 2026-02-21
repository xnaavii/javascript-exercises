const reverseString = function (string) {
  if (typeof string !== 'string') {
    return 'ERROR';
  }

  let stringsArray = [];
  for (let i = 0; i < string.length; i++) {
    // Add each letter to the array
    stringsArray.push(string[i]);
  }

  // Reverse the array
  stringsArray.reverse();

  let reversedString = '';
  for (let i = 0; i < stringsArray.length; i++) {
    reversedString += stringsArray[i];
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
