const removeFromArray = function (arr, ...theArguments) {
  theArguments.forEach((arg) => {
    const indexToRemove = arr.findIndex((num) => num === arg);

    if (indexToRemove === -1) {
      return;
    } else {
      arr.splice(indexToRemove, 1);
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
