const repeatString = function (string, num) {
  let word = string;
  if(string === "")
    return "";
  if(num == 0)
    return "";
  else if(num < 0)
    return "ERROR";
  for (i = 0; i < num - 1; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
