const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let arraySum = 0
  for (let i = 0; i < array.length; i++) {
    arraySum +=  array[i];
  }
  return arraySum;
};

const multiply = function(array) {
  let arrayMultiply = 1
  for (let i = 0; i < array.length; i++) {
    arrayMultiply = arrayMultiply * array[i];
  }
  return arrayMultiply;
};

const power = function(num, power) {
	let answer = 1
  for (let i = 0; i < power; i++) {
    answer = answer * num;
  }
  return answer;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let answer = 1
  for (let i = 1; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
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
