const removeFromArray = function (arr, ...itemsToRemove) {
  // If I have [1,2,3]
  // My items to remove are = 1
  // Arr returns [2, 3]
  return arr.filter((item) => !itemsToRemove.includes(item));
};

console.log(removeFromArray([1, 2, 3], "1"));

// Do not edit below this line
module.exports = removeFromArray;
