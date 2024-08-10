const reverseString = function(string) {
    if(string === '')
        return '';
    string = string.split("");
    stringLength = string.length;
    for(i = 0; i < (stringLength) / 2; i++){
        let temp = string[i];
        string[i] = string[stringLength - 1 - i];
        string[stringLength - 1 - i] = temp;
    }
    string = string.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
