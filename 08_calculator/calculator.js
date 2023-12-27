const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArr) {
  let total = 0;
	for (let i = 0; i < numArr.length; i++) {
    total += numArr[i];
  }
  return total;
};

const multiply = function(numArr) {
  const len = numArr.length;
  
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return numArr[0];
  }

  let total = numArr[0];

	for (let i = 1; i < len; i++) {
    total *= numArr[i];
  }
  return total;
};

const power = function(x, y) {
	return Math.pow(x,y);
};

const factorial = function(num) {

if (num < 0) return 0;
if ((num === 1) || (num === 0))return 1;

let total = num;
// either i > 1 or i > 2 work. because the last one is * 1
for (let i = num; i > 2; i--) {
  total *= (i - 1);
}
return total;

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
