const convertToCelsius = function(tempFahrenheit) {
  tempCelsius = (tempFahrenheit - 32) * (5 / 9);
  roundedTemp = Math.round(tempCelsius * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(tempCelsius) {
  tempFahrenheit = (tempCelsius * (9 / 5) + 32);
  roundedTemp = Math.round(tempFahrenheit * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
