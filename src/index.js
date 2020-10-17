module.exports = function check(str, bracketsConfig) {
  testArray = [];
  if (str.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (
              (bracketsConfig[j][0] === bracketsConfig[j][1]) &&
              (str[i] === bracketsConfig[j][1])
          ) {
              if (testArray[testArray.length - 1] === str[i]) {
                  testArray.pop();
              } else {
                  testArray.push(str[i]);
              }
          } else {
              if (str[i] === bracketsConfig[j][0]) {
                  testArray.push(str[i]);
              }
              if (
                  (str[i] === bracketsConfig[j][1]) &&
                  (testArray[testArray.length - 1] === bracketsConfig[j][0])
              ) {
                  testArray.pop();
              }
          }
      }
  }
  if (testArray.length === 0) {
      return true;
  } else {
      return false;
  }
};

