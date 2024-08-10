const sumAll = function(from, to) {
    let sum = 0;
    if(Number.isInteger(from) && Number.isInteger(to)){
        if(from < 0 || to < 0)
            return "ERROR";
        else if(from < to){
            for(i = from; i <= to; i++){
                sum += i;
            }
        }
        else if(from > to){
            for(i = to; i <= from; i++){
                sum += i;
            }
        }
        return sum;
    }
    else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
