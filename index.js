const factorialize = function(num){
    var result = num

    for(var i = (num - 1) ; i > 1; i-- ){
        result = result * i
    }

    return result
}

module.exports = factorialize
