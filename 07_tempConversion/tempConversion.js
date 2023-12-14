const convertToCelsius = function(f) {
  // c = (f-32) X 5/9
  let c = (f -32) * (5 / 9);
  return (Math.round(c * 10) / 10);
};

const convertToFahrenheit = function(c) {
  // f = c X 9/5 + 32
  let f = c * (9/5) + 32;
  return (Math.round(f * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
