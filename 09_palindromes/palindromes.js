const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";

    cleanedString = string.toLowerCase()
    .split('')
    .filter((item) => alphanumeric.includes(item))
    .join('');
    
    reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
    
};

// Do not edit below this line
module.exports = palindromes;
