const convertToCelsius = function (fahrenheit) {
  const convertedValue = ((fahrenheit - 32) * 5) / 9;

  return Number(convertedValue.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  const convertedValue = (celsius * 9) / 5 + 32;

  return Number(convertedValue.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
