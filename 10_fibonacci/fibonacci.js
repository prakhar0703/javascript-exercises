const fibonacci = function(a) {
    a = parseInt(a);
    if(a < 0) return "OOPS";
    array = [0,1,1];
    for(let i = 2; i <= a; i++){
        array[i] = array[i-1] + array[i-2];
    }
    return array[a];
};

// Do not edit below this line
module.exports = fibonacci;
