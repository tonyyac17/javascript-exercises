const convertToCelsius = function(degreeF) {
  let number = (degreeF - 32)/1.8;
  let result = Math.round(number*10)/10;
  return result;
};

const convertToFahrenheit = function(degreeC) {
  let number = (degreeC*1.8) + 32;
  let result = Math.round(number * 10)/ 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
