const sumAll = function(x,y) {
    if (x<0 || y<0) {
        return 'ERROR'
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR'
    }
    let list = [];
    if (x < y) {
        for (let i=x; i<=y; i++) {
            list.push(i);
        }
    } else {
        for (let i=x; i>=y; i--) {
            list.push(i);
        }
    }
    let intialValue = 0;
    let sum = list.reduce((previousValue, currentValue) => previousValue +currentValue,intialValue);
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
