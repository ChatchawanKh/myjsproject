const { sum, multiply, divide } = require("./math");

function calculater(a, b, c) {
  const additionResult = sum(a, b);
  const multiplicationResult = multiply(additionResult, c);
  return divide(multiplicationResult, 2);
}

module.exports = calculater;
