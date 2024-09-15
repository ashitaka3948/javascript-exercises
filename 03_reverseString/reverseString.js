const reverseString = function(string) {
  let array = string.split('');
  let revArray = array.reverse();
  let revString = "";
  for (i = 0; i < array.length; i++) {
    revString += revArray[i];
  }
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
