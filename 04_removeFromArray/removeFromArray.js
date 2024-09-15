const removeFromArray = function(array, ...elementToRemove) {
  let newArray = array
  for (let i = 0; i < elementToRemove.length; i++) {
    newArray = newArray.filter(item => item !== elementToRemove[i]);
  }
  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
