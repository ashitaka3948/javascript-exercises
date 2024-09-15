const palindromes = function (str) {
  let lowerCaseStr = str.toLowerCase();
  let arr = lowerCaseStr.match(/[a-zA-Z0-9]/g).join('');
  let arrLength = arr.length;
  let lastLetter = arrLength - 1;
  let halfLetter;

  if (arrLength % 2 === 0) {
    halfLetter = (arrLength / 2) - 1;
  } else {
    halfLetter = ((arrLength - 1) / 2) - 1;
  }
  
  for (let i = 0; i < halfLetter; i++) {
    if (arr[i] != arr[lastLetter - i]) {
      return false;
    }
  } 
  return true;
};

// Do not edit below this line
module.exports = palindromes;
