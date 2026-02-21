const repeatString = function (string, num) {
  if (num < 0) {
    return 'ERROR';
  }

  let repeatedString = '';
  for (let i = 0; i < num; i++) {
    repeatedString += string;
  }
  console.log(repeatedString);
  return repeatedString;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
