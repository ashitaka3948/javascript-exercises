const repeatString = function(string, num) {
  let str = "";
  if (num < 0) {
    return 'ERROR';
  } else {
      for (let n = 0; n < num; n++) {
        str += string;
      }
      return str;
  }
};

// Do not edit below this line
module.exports = repeatString;
