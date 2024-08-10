const convertToCelsius = function(fahrenheitValue) {
  celsiusValue = (5/9 * (fahrenheitValue - 32));
  if(Number.isInteger(celsiusValue))
    return celsiusValue;
  else return Number(celsiusValue.toFixed(1));
};

const convertToFahrenheit = function(celsiusValue) {
  fahrenheitValue = ((celsiusValue * 9/5) + 32);
  if(Number.isInteger(fahrenheitValue))
    return fahrenheitValue;
  else return Number(fahrenheitValue.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
