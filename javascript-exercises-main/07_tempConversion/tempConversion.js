const convertToCelsius = function(degreeFah) {  
  let  converted = (degreeFah - 32) * (5/9);
  return parseFloat(converted.toFixed(1));
};

const convertToFahrenheit = function(degreeCel) {
  let converted = degreeCel * (9/5) + 32;
  return parseFloat(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
