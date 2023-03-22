const sumAll = function (argA, argB) {
  if (typeof argA !== "number" || typeof argB !== "number") {
    return "ERROR";
  }
  if (argA < 0 || argB < 0) {
    return "ERROR";
  }
  let smaller;
  let larger;
  if (argA < argB) {
    smaller = argA;
    larger = argB;
  } else if (argB < argA) {
    smaller = argB;
    larger = argA;
  }
  const array = [];
  for (i = smaller; i <= larger; i++) {
    array.push(i);
  }
  const sum = array.reduce((acc, curr) => acc + curr);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
