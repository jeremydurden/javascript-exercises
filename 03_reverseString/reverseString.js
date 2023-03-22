const reverseString = function (string) {
  const arr = string.split("");
  const reversedArr = arr.reverse();
  const newString = reversedArr.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
