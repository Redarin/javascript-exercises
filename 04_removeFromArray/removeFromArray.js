const removeFromArray = function(arr,value) {
    let result = Array.from(arr)
    for (i=0; i<result.length; i++){
        if (result[i] === value){
            result.splice(i, 1)
        }
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
