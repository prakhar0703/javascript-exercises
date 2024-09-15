const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, item) => sum += item, 0);
};

const multiply = function(array) {
  return array.reduce((product, item) => product *= item);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if(a == 0) return 1;
  let factorialProduct = 1;
  while(a > 1){
    factorialProduct *= a;
    a--;
  }
  return factorialProduct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
